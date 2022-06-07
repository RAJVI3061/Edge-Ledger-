var navbar = document.getElementById("navbar");
let scrolled = false;
console.log(navbar);
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    console.log(navbar);
    navbar.classList.remove("top");

    if (!scrolled) {
      navbar.style.transform = "translateY(-70)";
      console.log(navbar);
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
