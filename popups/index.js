const backgroundBtn = document.getElementById('startBackgroundProcess')

backgroundBtn.addEventListener('click',()=>{

    chrome.runtime.sendMessage({event:'onStart'});
    console.log("message sent to background process")

})