
// Search page for CCPA opt-out link
var pageElements = document.getElementsByTagName('*');
var linkDetected = false;
for(var i = 0; i < pageElements.length; i++) {
    if(pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1
        || pageElements[i].innerHTML.toLowerCase().search('don\'t sell') != -1) {
        linkDetected = true;
    }
}

// Send result to background script
if(linkDetected){
    browser.runtime.sendMessage({linkDetected: "yes"});
}
else{
    browser.runtime.sendMessage({linkDetected: "no"});
}
