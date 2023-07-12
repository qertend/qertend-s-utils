function bubble() {
    if (document.hasrun) {
        return;
    };
    document.hasrun = true;

    let style_main = "color:orange;";
    let style_active = "color:green; font-weight:bold;"
    console.log("%cqertend's utilities is %cACTIVE %con page%c\n" + document.URL, style_main,style_active, style_main);

    const bubble = document.createElement("img");
    bubble.id = "qertend_bubble";
    bubble.src = browser.runtime.getURL("bubble/bubble.svg");
    bubble.style.width = "3em";
    bubble.style.height = "3em";
    bubble.style.position = "fixed";
    bubble.style.right = "2em";
    bubble.style.bottom = "2em";
    bubble.style.zIndex = 9999;

    bubble.style.transition = "all 0.5s ease-in";

    document.body.appendChild(bubble);

    bubble.addEventListener("click", clicked);

    function clicked() {
        console.log("clicked");
        bubble.style.transform = "translate(5em, 5em) scale(0, 0) rotate(1.0turn)";
    }


}
bubble();
