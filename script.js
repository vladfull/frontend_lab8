const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "white";
    header.style.color = "black";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.color = "white";
  }
});

const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const swiper1 = new Swiper(".testimonials-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
