chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.dataToSave) {
        chrome.storage.local.set(dataToSave, function() {...});

        // You can then set upn the proper popup for the next click or even switch to it
        switch(request.popupToDisplay) {
            case "awesomeDisplay":
            chrome.browserAction.setPopup({...})
            break;
        }


        var responseFromExtension = {success: true}
    } else {
        var responseFromExtension = {error: true}
    }
});