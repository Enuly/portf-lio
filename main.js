document.querySelectorAll('.projeto').forEach(card => {
    card.addEventListener('click', function() {
        const url = card.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});


function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    
    pixel.style.left = `${Math.random() * 100}vw`;
    pixel.style.setProperty("--duration", `${2 + Math.random() * 3}s`);

    document.getElementById("pixel-background").appendChild(pixel);

    pixel.addEventListener("animationend", () => pixel.remove());
}

setInterval(createPixel, 250);
