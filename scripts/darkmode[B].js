browser.runtime.onMessage.addListener((response) => {
    console.log(response.data);
    console.log("all response data: ");
    console.log(response);
    return Promise.resolve({data: "hello from c script"})
});

//dark mode
let darkMode = false;

browser.storage.local.get(["darkMode"]).then((result) => {
    darkMode = result.darkMode;
});

function changeMode(state) {
    if (state) {
        
    }
}

browser.storage.onChanged.addListener((changes, area) => {
    
});