function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

function displayHighlight() {
    console.log("displaying highlight in popup...") ;
    setChildTextNode("resultsHighlight", "running...");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendRequest(tab.id, "popup", function handler(response) {
            setChildTextNode("resultsHighlight", response);
        }) ;
    }) ;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#requestHighlight').addEventListener(
        'click', displayHighlight) ;
}) ;
