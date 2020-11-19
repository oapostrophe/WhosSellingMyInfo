/**
 * Contains functions triggered by clicks, to be inserted into page.
 */

// Add compatibility for Chromuim-based browsers
var browser = browser || chrome;

try {
    /**
     * Close notification when 'X' button is clicked.
    */

    document.getElementById('CCPAClose').onclick = function () {
        // console.log("closed")
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
    document.getElementById('CCPAButton').onclick = function () {
        // console.log("stopped sale of personal info");

        var pageElements = document.getElementsByTagName('*');
        for (var i = 0; i < pageElements.length; i++) {

            // If opt-out link is found, click it.
            if (pageElements[i].innerHTML.toLowerCase().search('do not sell') != -1
                || pageElements[i].innerHTML.toLowerCase().search('don\'t sell') != -1) {
                pageElements[i].click();
            }
        }
    }
} catch (err) {

    if (err.name != "TypeError") {
        console.error(err);
    }

}