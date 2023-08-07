chrome.contextMenus.create({
    "id": "bce",
    "title": "Balance chemical equations",
    "contexts": ["selection"]
});


chrome.contextMenus.onClicked.addListener(function(info) {
    console.log(info.menuItemId);
    if (info.menuItemId === 'bce') {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { text: info.selectionText });
        } else {
          console.log("No active tabs found.");
        }
      })
    }
  });

