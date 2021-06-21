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
  scrollY > 20
    ? navbar.classList.add("active")
    : navbar.classList.remove("active");
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
// // ================================================== ACCORDIONS=============================================
const accBtns = document.querySelectorAll(".accordion-header");
const accContents = document.querySelectorAll(".accordion-body");

accBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    accContents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        accBtns.forEach((btns) => btns.classList.remove("active"));
      }
    });
    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});
// ============================================ IMAGE FILTER GAllERY=============================================
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    document.querySelector(".on").classList.remove("on");
    event.target.classList.add("on");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
// ============================================ CAROUSEL=============================================
const indicators = document.getElementsByClassName("btn");
const sliders = document.getElementById("slider-box");

indicators[0].onclick = (e) => {
  sliders.style.transform = "translateX(-0%)";
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
indicators[1].onclick = (e) => {
  sliders.style.transform = "translateX(-33%)";
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
indicators[2].onclick = (e) => {
  sliders.style.transform = "translateX(-67%)";
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
// ============================================ CAROUSEL 2=============================================
const controllers = document.getElementsByClassName("control");
const items = document.getElementById("project-inner");

controllers[0].onclick = (e) => {
  items.style.transform = "translateX(0)";
  for (let i = 0; i < controllers.length; i++) {
    controllers[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
controllers[1].onclick = (e) => {
  items.style.transform = "translateX(-33%)";
  for (let i = 0; i < controllers.length; i++) {
    controllers[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
controllers[2].onclick = (e) => {
  items.style.transform = "translateX(-66%)";
  for (let i = 0; i < controllers.length; i++) {
    controllers[i].classList.remove("active");
  }
  e.target.classList.add("active");
};
// ============================================ Making Navbar Responsive==========================================
const menuBtn = document.getElementById("menuBar");
const crossBtn = document.getElementById("crossBar");
const menuBar = document.querySelector(".navbar .container .navigation ul");
const body = document.querySelector("body");

menuBtn.onclick = () => {
  menuBar.classList.add("active");
  body.style.overflow = "hidden";
};
crossBtn.onclick = () => {
  menuBar.classList.remove("active");
  body.style.overflow = "auto";
};
// ============================================ PRE LOADER==========================================
const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
