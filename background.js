/**
 * Background script: updates extension icon if opt-out link is detected.
 */

// Listen for search results
browser.runtime.onMessage.addListener(updateIcon);

// Update icon based on search result
function updateIcon(response){
    if(response.linkDetected == "yes"){
        browser.browserAction.setIcon({path: "icons/icon_active.png"});
    }
    else{
        browser.browserAction.setIcon({path: "icons/icon_inactive.png"});
    }
}
