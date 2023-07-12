//Initialise extension
browser.runtime.onInstalled.addListener(() => {
    //Set default storage values
    browser.storage.local.set({
        darkMode: true
    });
});