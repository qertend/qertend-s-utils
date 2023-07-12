browser.runtime.onMessage.addListener((response) => {
    console.log(response.data);
    console.log("all response data: ");
    console.log(response);
    return Promise.resolve({data: "hello from c script"})
});
