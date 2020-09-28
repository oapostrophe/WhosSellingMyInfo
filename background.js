// Listen for search results
browser.runtime.onMessage.addListener(updateIcon);

// Update icon to show search results to user
function updateIcon(response){
    if(response.linkDetected == "yes"){
        browser.browserAction.setIcon({path: "icons/test1.png"});
    }
    else{
        browser.browserAction.setIcon({path: "icons/test.png"});
    }
    
}
