const bodyEl = document.querySelector("body");

// Add heart trail on mouse move
bodyEl.addEventListener("mousemove", (event) => {
    createHeart(event.offsetX, event.offsetY);
});

// Add burst of hearts on click
bodyEl.addEventListener("click", (event) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createHeart(event.offsetX, event.offsetY);
        }, i * 100); 
    }
});

// Function to create a heart
function createHeart(xPos, yPos) {
    const spanEl = document.createElement("span");
    const size = Math.random() * 50 + 50; // Random size between 50px and 100px
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    spanEl.style.filter = `hue-rotate(${Math.random() * 360}deg)`; // Random hue rotation
    bodyEl.appendChild(spanEl);

    // Remove heart after animation
    setTimeout(() => {
        spanEl.remove();
    }, 3000); // Adjusted for animation duration
}
