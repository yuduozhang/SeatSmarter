function readJSON() {
    var data = loadDoc("data.json");
    return data;
}
function loadDoc(URL)
{
    var docRequest = new XMLHttpRequest();
    
    //need to change async later
    docRequest.open("GET",chrome.extension.getURL(URL),false); 
    docRequest.send(null);
    
    return JSON.parse(docRequest.responseText);
}