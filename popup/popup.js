var browser = browser || chrome;

var num_detected = 0;
var num_total = 0;

browser.storage.local.get(["detected"], function (result) {
    if (result.detected != null) {
        num_detected = result.detected;
    }
    document.getElementById("detected").textContent = num_detected;

    browser.storage.local.get(["total"], function (result) {
        if (result.total != null) {
            num_total = result.total;
        }
        document.getElementById("total").textContent = num_total;

        var percentage = Math.round(num_detected / num_total * 100);
        document.getElementById("percentage").textContent = percentage;

    });
});



