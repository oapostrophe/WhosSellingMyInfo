// Listen for search results
browser.runtime.onMessage.addListener(updateIcon);

// Add popup CSS
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://raw.githubusercontent.com/swow2015/Who-sSellingMyInfo-/master/popup.css');
document.getElementsByTagName('head')[0].appendChild(link);

// Display popup
var popup = document.createElement('div');
popup.innerHTML = '<b>This website sells your personal information.  Click below to opt out.</b>';
popup.setAttribute('class', 'CCPAPopup');
document.getElementsByTagName('body')[0].appendChild(popup);

// Update icon based on search result
function updateIcon(response){
    if(response.linkDetected == "yes"){
        browser.browserAction.setIcon({path: "icons/icon_active.png"});
    }
    else{
        browser.browserAction.setIcon({path: "icons/icon_inactive.png"});
    }
    
}
