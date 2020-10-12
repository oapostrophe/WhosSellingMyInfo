/**
 * Contains functions triggered by clicks, to be inserted into page.
 */

 /**
  * Close notification when 'X' button is clicked.
  */

console.log('script inserted');

function ccpaClose(){
    console.log('close ran');
    var popup = document.getElementById('CCPAPopup');
    var close = document.getElementById('CCPAClose');
    var moreInfo = document.getElementById('CCPAMoreInfo');
    var button = document.getElementById('CCPAButton');
    popup.style.display = 'none';
    close.style.display = 'none';
    moreInfo.style.display = 'none';
    button.style.display = 'none';
}

/**
 * Find and click CCPA opt-out link
 */
function ccpaButtonClick(){
    console.log('buttonclick ran');
    var pageElements = document.getElementsByTagName('*');
    for(var i = 0; i < pageElements.length; i++) {

        // If opt-out link is found, click it.
        if(pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1
            || pageElements[i].innerHTML.toLowerCase().search('don\'t sell') != -1) {
            pageElements[i].click();
        }
    }
}