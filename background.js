// Listen for search results
browser.runtime.onMessage.addListener(updateIcon);

// Update icon based on search result
function updateIcon(response){
    console.log("ran");
    if(response.linkDetected == "yes"){
        browser.browserAction.setIcon({path: "icons/icon_active.png"});
    }
    else{
        browser.browserAction.setIcon({path: "icons/icon_inactive.png"});
    }

    console.log("point2");

}
