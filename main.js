window.addEventListener("load", main)

function main () {
  addEventListeners();
  startSlideshow();
}

function addEventListeners() {
  const hamburgerMenuIcon = getElementById("hamburger-menu-icon");
  hamburgerMenuIcon.onclick = openHamburgerMenu;
}
function openHamburgerMenu() {
    let menuMobile = document.getElementById("menu-mobile");
    menuMobile.style.right = 0;
    window.onclick = menuMobile.style.right
  }