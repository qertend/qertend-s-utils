function biscuit() {
    for (e of document.getElementsByTagName("p")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    for (e of document.getElementsByTagName("a")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    for (e of document.getElementsByTagName("span")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    for (e of document.getElementsByTagName("h1")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    for (e of document.getElementsByTagName("h2")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    for (e of document.getElementsByTagName("h3")) {
        e.innerHTML = e.innerHTML.replaceAll("cookie", "biscuit");
    }
    
}
biscuit();