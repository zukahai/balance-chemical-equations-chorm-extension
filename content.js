chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse({success: success, text: text});
})