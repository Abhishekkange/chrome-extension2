//reading the messages
chrome.runtime.onMessage.addEventListener(data=>{

    if(data.event=='onStart')
    {
        console.log("Background process is running successfully !");
    }

})