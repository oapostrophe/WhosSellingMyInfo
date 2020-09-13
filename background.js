browser.runtime.onMessage.addListener(updateIcon);

function updateIcon(){
    browser.browserAction.setIcon({path: "icons/test1.png"});
}
