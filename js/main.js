"use strict";

// -----------------------------------------------------------------------------

function hideLoader() {
  const loader = document.getElementById("loader");
  const contents = document.querySelectorAll(".hidden-content");

  let isLoaded = false;
  let isMinimumTimePassed = false;

  setTimeout(() => {
    isMinimumTimePassed = true;
    if (isLoaded) hideNow();
  }, 1500);

  window.addEventListener("DOMContentLoaded", () => {
    isLoaded = true;
    if (isMinimumTimePassed) hideNow();
  });

  function hideNow() {
    loader.classList.add("hidden");
    contents.forEach((el) => el.classList.add("show"));
  }
}

// -----------------------------------------------------------------------------

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  const lightIcon = "./images/moon.png";
  const darkIcon = "./images/sun.png";

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark");
    icon.src = darkIcon;
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      icon.src = darkIcon;
    } else {
      localStorage.setItem("theme", "light");
      icon.src = lightIcon;
    }
  });
}

// -----------------------------------------------------------------------------

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercent}%`;
  });
}

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
  toggleTheme();
  updateScrollProgressBar();
});

// -----------------------------------------------------------------------------

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const links = document.querySelectorAll(".header__links");

function closeMenu() {
  nav.classList.remove("active");
  burger.classList.remove("active");
}
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
document.addEventListener("click", (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isBurgerClick = burger.contains(e.target);
  if (!isClickInsideNav && !isBurgerClick) {
    closeMenu();
  }
});

// -----------------------------------------------------------------------------
