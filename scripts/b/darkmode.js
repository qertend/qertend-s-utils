browser.runtime.onMessage.addListener((response) => {
    console.log(response.data);
    console.log("all response data: ");
    console.log(response);
    return Promise.resolve({data: "hello from c script"})
});

//dark mode
var darkModeOn = false;

browser.storage.local.get(["darkMode"]).then((result) => {
    darkModeOn = result.darkMode;
    changeMode(darkModeOn);

});

function changeMode(state) {
    darkModeOn = state;
    if (state) {
        browser.tabs.inserCSS({"background-color": "red", "color": "magenta"});
    }
}

browser.storage.onChanged.addListener((changes, area) => {
    if (changes.darkMode.newValue != changes.darkMode.oldValue) changeMode(changes.darkMode.newValue);
});