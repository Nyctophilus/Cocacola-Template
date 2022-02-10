var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});

// toggle menu
let toggleMenu = document.querySelector(".toggle");
let nav = document.querySelector(".navigation");
toggleMenu.onclick = () => {
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
};
