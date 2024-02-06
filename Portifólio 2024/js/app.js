const header = document.querySelector("header");

/*----------Navbar----------*/

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
