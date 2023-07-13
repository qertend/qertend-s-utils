const flag = document.createElement("p");

flag.id = "QU flag";
flag.innerHTML = "qertend's utilities is running";

flag.style.color = "black";
flag.style.fontFamily = "Helvetica";
flag.style.fontWeight = "600";

flag.style.backgroundColor = "orange";
flag.style.position = "fixed";
flag.style.top = "2em";
flag.style.padding = "1em"
flag.style.zIndex = 9999;

flag.style.borderTopRightRadius = "1em";
flag.style.borderBottomRightRadius = "1em";

flag.style.transition = "all 1s ease-in";

document.body.appendChild(flag);

setTimeout(() => {flag.style.transform = "translateX(-15em)"}, 2000);