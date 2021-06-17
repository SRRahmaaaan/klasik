// ================================================== NAVBAR==========================================
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .container nav ul li");
window.addEventListener("scroll", () => {
    let currentSec = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop) {
        currentSec = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(currentSec)) {
        li.classList.add("active");
        }
    });
});
window.onscroll = () => {
    scrollY > 20 ? navbar.classList.add("active") : navbar.classList.remove("active");
};
// ================================================== SLIDERS=====================================
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //  get the current class
    const current = document.querySelector(".current");
    //  remove the current class
    current.classList.remove("current");
    //  check for next slide
    if (current.nextElementSibling) {
        // add current to the next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        // add current to start
        slides[0].classList.add("current");
    }
    setTimeout(() => {
        current.classList.remove("current");
    });
};
next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
        nextSlide();
        }, intervalTime);
    }
});

const prevSlide = () => {
    //  get the current class
    const current = document.querySelector(".current");
    //  remove the current class
    current.classList.remove("current");
    //  check for previous slide
    if (current.previousElementSibling) {
        // add current to the previous sibling
        current.previousElementSibling.classList.add("current");
    } else {
        // add current to start
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => {
        current.classList.remove("current");
    });
};
prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
        nextSlide();
        }, intervalTime);
    }
});
// auto slide after 5s
if (auto) {
    slideInterval = setInterval(() => {
        nextSlide();
    }, intervalTime);
}
