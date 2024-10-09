document.addEventListener("mousemove", (e) => {
    const body = document.body;
    const scratcher = document.createElement("span");

    scratcher.style.left = -17 + e.offsetX + "px";
    scratcher.style.top = -17 + e.offsetY + "px";
    
    body.append(scratcher);
})