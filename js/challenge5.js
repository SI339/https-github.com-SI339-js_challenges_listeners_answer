// Challenge 5: show the image and its alt text on hover or keyboard focus
const display = document.querySelector("#display");
const originalText = display.textContent;

function showImage() {
    display.style.backgroundImage = `url('${this.src}')`;
    display.textContent = this.alt;
}

function resetDisplay() {
    display.style.backgroundImage = "";
    display.textContent = originalText;
}

const thumbnails = document.querySelectorAll(".thumbnail");
for (let index = 0; index < thumbnails.length; index++) {
    console.log(`Adding image listeners to index ${index}`);
    console.log(thumbnails[index]);

    thumbnails[index].addEventListener("mouseover", showImage);
    thumbnails[index].addEventListener("focus", showImage);
    thumbnails[index].addEventListener("mouseout", resetDisplay);
    thumbnails[index].addEventListener("blur", resetDisplay);
}
