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
    moreInfo.setAttribute('href', 'http://www.google.com/');
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
 * Main script code: searches page for link, displays notification, sends
 * results back to background script.
 */

// Add notification stylesheet
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', browser.runtime.getURL('./popup.css'));
document.getElementsByTagName('head')[0].appendChild(link);

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
    browser.runtime.sendMessage({linkDetected: "yes"});
}
else {
    browser.runtime.sendMessage({linkDetected: "no"});
}
