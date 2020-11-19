/**
 * Content script to detect CCPA opt-out links.  Searches the page for
 * such a link, then displays a notification if found.
 */

// Add compatibility for Chromuim-based browsers
var browser = browser || chrome;

/**
 * Function to display notification
 */
function displayPopup() {

    // Create popup
    var popup = document.createElement('div');
    popup.innerHTML = '<b>This website sells your personal information.  Opt out below. </b>';
    popup.setAttribute('id', 'CCPAPopup');

    // Create 'X' button
    var close = document.createElement('span');
    close.innerHTML = 'x';
    close.setAttribute('id', 'CCPAClose');
    popup.appendChild(close);

    // Create more info link
    var moreInfo = document.createElement('a');
    moreInfo.setAttribute('id', 'CCPAMoreInfo');
    moreInfo.setAttribute('href', browser.runtime.getManifest().homepage_url);
    moreInfo.setAttribute('target', '_blank');
    moreInfo.innerHTML = 'More Info';
    popup.appendChild(moreInfo);

    // Create button
    var button = document.createElement('button');
    button.setAttribute('id', 'CCPAButton');
    button.innerHTML = "Don't Sell My Personal Information";
    popup.appendChild(button);

    // Add popup to document
    document.getElementsByTagName('BODY')[0].appendChild(popup);


}

/**
 * Changes the number of websites detected and the total number of
 * websites visited by one
 */
function linkIsDetected() {
    browser.storage.local.get(["detected"], function (result) {
        if (result.detected == null) {
            browser.storage.local.set({"detected": 1}, function () { });
        } else {
            browser.storage.local.set({"detected": result.detected + 1}, function () { });
        }
    });

    browser.storage.local.get(["total"], function (result) {
        if (result.total == null) {
            browser.storage.local.set({"total": 1}, function () { });
        } else {
            browser.storage.local.set({"total": result.total + 1}, function () { });
        }
    });
}

/**
 * Changes the total number of websites visited by one
 */
function linkIsNotDetected() {
    browser.storage.local.get(["total"], function (result) {
        if (result.total == null) {
            browser.storage.local.set({"total": 1}, function () { });
        } else {
            browser.storage.local.set({"total": result.total + 1}, function () { });
        }
    });
}

/**
 * Main script code: searches page for link, displays notification, sends
 * results back to background script.
 */

// Search page elements for CCPA opt-out link
var pageElements = document.getElementsByTagName('*');
var linkDetected = false;
var linkReference = null;
for (var i = 0; i < pageElements.length; i++) {

    // If opt-out link is found, display notification
    if (pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1
        || pageElements[i].innerHTML.toLowerCase().search('don\'t sell') != -1) {
        linkReference = pageElements[i];
        linkDetected = true;
    }
}

// Send search result to background script
if (linkDetected) {
    displayPopup();
    linkIsDetected();
    browser.runtime.sendMessage({linkDetected: "yes"});
}
else {
    linkIsNotDetected();
    browser.runtime.sendMessage({linkDetected: "no"});
}
