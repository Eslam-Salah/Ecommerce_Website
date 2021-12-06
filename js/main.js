// Start Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    preloader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 3000);
});

// Start show popup after 5sec
let popup = document.querySelector(".popup");
let close_popup = document.querySelector(".close-popup");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style.overflow = "hidden";
    popup.classList.add("show");
  }, 5000);
});

close_popup.addEventListener("click", () => {
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Start Header
let open_bars = document.querySelector(".hamburger");
let close_bars = document.querySelector(".nav_top .close");
let nav_menu = document.querySelector(".nav_menu");

open_bars.addEventListener("click", () => {
  nav_menu.classList.add("show");
});

close_bars.addEventListener("click", () => {
  nav_menu.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (e.target !== open_bars && e.target !== nav_menu) {
    nav_menu.classList.remove("show");
  }
});

open_bars.onclick = function (e) {
  e.stopPropagation();
};

// fixed navbar
let navbar = document.querySelector(".navigation");
let navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const windowHeight = window.scrollY;
  if (windowHeight > navHeight) {
    navbar.classList.add("fixed_menu");
  } else {
    navbar.classList.remove("fixed_menu");
  }
});

// Open Search in navbar
let search_btn = document.querySelector(".nav_icons .fa-search");
let login_btn = document.querySelector(".nav_icons .fa-user");
let close_login = document.querySelector(".close_login");

search_btn.addEventListener("click", () => {
  document.querySelector("header .form_search").classList.toggle("active");
  document.querySelector("header .form_login").classList.remove("active");
});

// Open Login in navbar
login_btn.addEventListener("click", () => {
  document.querySelector("header .form_login").classList.add("active");
  document.querySelector("header .form_search").classList.remove("active");
});

close_login.addEventListener("click", () => {
  document.querySelector("header .form_login").classList.remove("active");
});

// Slider for hero section
let slides = document.querySelectorAll(".hero_slide");
let nextBtn = document.querySelector(".hero_controls .right");
let prevBtn = document.querySelector(".hero_controls .left");
let index = 0;

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function next() {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  carousel();
}

function prev() {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  carousel();
}

function carousel() {
  slides.forEach((el) => {
    el.classList.remove("active");
  });
  slides[index].classList.add("active");
}

setInterval(next, 7000);

//  Tabs for title-category
let title_category = document.querySelectorAll(".title-category .trend");
let box_category = document.querySelectorAll(".sort-category .box");

title_category.forEach((el) => {
  el.addEventListener("click", (e) => {
    title_category.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.classList.add("active");

    box_category.forEach((box) => {
      box.style.display = "none";
    });

    document.querySelectorAll(el.dataset.cat).forEach((cat) => {
      cat.style.display = "block";
    });
  });
});

// Back top top Btn
let to_top = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    to_top.classList.add("active");
  } else {
    to_top.classList.remove("active");
  }
});

to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
