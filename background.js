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
    // Add popup CSS
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://gitcdn.link/repo/swow2015/Who-sSellingMyInfo-/master/popup.css');
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    console.log("point3");
    // Display popup
    var popup = document.createElement('div');
    popup.innerHTML = 'This website sells your personal information.  Click below to opt out.';
    popup.setAttribute('class', 'CCPAPopup');
    popup.setAttribute('id', 'CCPA');
    document.getElementsByTagName('BODY')[0].appendChild(popup);
    console.log(document.getElementsByTagName('BODY')[0]);
}
