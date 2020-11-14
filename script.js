window.addEventListener("load", main)

function main () {
  addEventListeners();
}

function addEventListeners() {
  const hamburgerMenuIcon = getElementById("hamburger-menu-icon");
  hamburgerMenuIcon.onclick = openHamburgerMenu;
}
function openHamburgerMenu() {
    let menuMobile = document.getElementById("menu-mobile");
  }