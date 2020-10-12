/**
 * Content script to detect CCPA opt-out links.  Searches the page for
 * such a link, then displays a notification if found.
 */

/**
 * Function to display notification
 */
function displayPopup(){
    console.log('displaying popup');
    // Create popup
    var popup = document.createElement('div');
    popup.innerHTML = '<b>This website sells your personal information.  Opt out below. </b>';
    popup.setAttribute('id', 'CCPAPopup');

    // Create 'X' button
    var close = document.createElement('span');
    close.innerHTML = 'x';
    close.setAttribute('id', 'CCPAClose');
    close.setAttribute('onclick', 'close();');
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
    button.setAttribute('onclick', 'linkReference.click();');
    button.innerHTML = "Don't Sell My Personal Information";
    popup.appendChild(button);

    // Add popup to document
    document.getElementsByTagName('BODY')[0].appendChild(popup);
    console.log('popup displayed');
}

/**
 * Function to close notification when 'x' button is clicked
 */
function close(){
    var popup = document.getElementById('CCPAPopup');
    var close = document.getElementById('CCPAClose');
    var moreInfo = document.getElementById('CCPAMoreInfo');
    var button = document.getElementById('CCPAButton');
    popup.style.display = 'none';
    close.style.display = 'none';
    moreInfo.style.display = 'none';
    button.style.display = 'none';
}

/**
 * Main script code: searches page for link, displays notification, sends
 * results back to background script.
 */

// Add notification stylesheet
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://www.gitcdn.xyz/repo/swow2015/Who-sSellingMyInfo-/master/popup.css');
document.getElementsByTagName('head')[0].appendChild(link);

// Search page elements for CCPA opt-out link
var pageElements = document.getElementsByTagName('*');
var linkDetected = false;
for(var i = 0; i < pageElements.length; i++) {

    // If opt-out link is found, display notification
    if(pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1
        || pageElements[i].innerHTML.toLowerCase().search('don\'t sell') != -1) {
        console.log('link found');
        var linkReference = pageElements[i];
        linkDetected = true;
        displayPopup();
    }
}

// Send search result to background script
if(linkDetected){
    browser.runtime.sendMessage({linkDetected: "yes"});
}
else{
    browser.runtime.sendMessage({linkDetected: "no"});
}

console.log('finished');