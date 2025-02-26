document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".header__burger__menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggled");
    burgerMenu.classList.toggle("header__burger__menu-active");
  });
  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= 420;
    if (!isMobile) {
      burger.classList.remove("toggled");
      burgerMenu.classList.remove("header__burger__menu-active");
    }
  });
});
