var googleDocument = googleDocsUtil.getGoogleDocument();
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log("The selected text is: " + googleDocument.selectedText);
        console.log("Document length: " + googleDocument.text.length) 
        sendResponse(googleDocument.selectedText);
    }) ;
