// Add popup CSS
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'popup.css');
document.getElementsByTagName('head')[0].appendChild(link);

// Display popup
var popup = document.createElement('div');
popup.innerHTML = '<b>This website sells your personal information.  Click below to opt out.</b>';
popup.setAttribute('class', 'CCPAPopup');
document.getElementsByTagName('body')[0].appendChild(popup);