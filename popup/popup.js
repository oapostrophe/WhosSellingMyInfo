var browser = browser || chrome;

chrome.storage.local.get(["detected"], function (result) {
    if (!result.detected == null) {
        document.getElementById("detected").textContent = result.detected;
    } else {
        document.getElementById("detected").textContent = 0;
    }
});

chrome.storage.local.get(["total"], function (result) {
    if (!result.total == null) {
        document.getElementById("total").textContent = result.total;
    } else {
        document.getElementById("total").textContent = 0;
    }
});