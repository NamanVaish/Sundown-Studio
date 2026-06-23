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

let page4Image = document.querySelector("#page4 img");
let leftContent = document.querySelectorAll("#left-content h2");
let info = document.querySelector("#info p");

leftContent.forEach(heading => {
    heading.addEventListener("click", e => {
        e.preventDefault();
        let image = heading.getAttribute("data-image");
        let text = heading.getAttribute("id");
        leftContent.forEach(t => {
            t.classList.remove("active");
        });
        heading.classList.add("active");
        page4Image.src = image;
        if (text === "Design") {
            info.innerHTML =
                "Our team works with our <br/>clients to refine an idea and <br/>concept into an executable <br/>design. We create a final design <br/>that encompasses the brand <br/>narrative to bring stories to life <br/>and provide end-to-end design <br/>solutions from concept, design, <br/>and architectural drawings to <br/>3D renderings.";
        } else if (text === "Project") {
            info.innerHTML =
                "Once we have a design, our <br/>production team takes the lead <br/>in bringing it to life. We manage <br/>all stages of the project, from <br/>build specifications and <br/>technical drawings to site <br/>surveys, vendor management, <br/>and 2D & 3D production. We <br/>have an extensive network of <br/>partners to meet each unique <br/>design and project need.";
        } else if (text === "Execution") {
            info.innerHTML =
                "We’re with you every step of <br/>the way, from the project <br/>initiation to launch day. Our <br/>production and design teams <br/>are onsite to direct and guide <br/>the process down to the last <br/>point of completion, ensuring <br/>success across the built space <br/>and experience.";
        }
    });
});
