const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

elemContainer.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
});

elemContainer.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach(e => {
    e.addEventListener("mouseenter", () => {
        let image = e.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`;
    });
});
