chrome.contextMenus.create({
    "id": "bce",
    "title": "Balance chemical equations",
    "contexts": ["selection"]
});


chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === 'bce') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: info.selectionText});
      })
    }
  });