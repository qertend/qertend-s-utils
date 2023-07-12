let darModeButton = document.getElementById("dark");
darModeButton.addEventListener("click", darkMode);
let darkModeOn = false;

function darkMode(){
    browser.storage.local.get(["darkMode"]).then((result) => {
        browser.storage.local.set({darkMode: !result.darkMode});
    });
}

function sendToTabsPRE() {
    let activeTabs = browser.tabs.query({currentWindow: true, active: true});

    activeTabs.then(sendToTabs).catch((e) => {console.error(e)});
}

function sendToTabs(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(tab.id, {data: tabs})
        .then((response) => {
            console.log(response.data);
        });
    }
}