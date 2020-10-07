
    // Add extension stylesheet
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://gitcdn.link/repo/swow2015/Who-sSellingMyInfo-/master/popup.css');
    link.setAttribute('href', 'popup.css');
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    // Create popup
    var popup = document.createElement('div');
    popup.innerHTML = '<b>This website sells your personal information.  Opt out below. </b>';
    popup.setAttribute('class', 'CCPAPopup');
    popup.setAttribute('id', 'CCPA');

    // Create x
    var close = document.createElement('span');
    close.innerHTML = 'x';
    close.setAttribute('class', 'CCPAClose');
    popup.appendChild(close);

    // Create more info link
    var moreinfo = document.createElement('a');
    moreinfo.setAttribute('class', 'CCPAMoreInfo');
    moreinfo.setAttribute('href', 'http://www.google.com/');
    moreinfo.innerHTML = 'More Info';
    popup.appendChild(moreinfo);

    // Create button
    var button = document.createElement('button');
    button.setAttribute('class', 'CCPAButton');
    button.innerHTML = "Don't Sell My Personal Information";
    popup.appendChild(button);

    // Add popup to document
    document.getElementsByTagName('BODY')[0].appendChild(popup);

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
