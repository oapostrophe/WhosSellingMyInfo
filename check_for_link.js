var pageElements = document.getElementsByTagName('*');
for(var i = 0; i < pageElements.length; i++) {
    if(pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1) {
        browser.runtime.sendMessage({});
    }
}