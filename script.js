const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


// MOBILE MENU

menu?.addEventListener("click", () => {

  if (nav.style.display === "flex") {

    nav.style.display = "none";

  } else {

    nav.style.display = "flex";

    if (window.innerWidth <= 800) {

      nav.style.position = "absolute";

      nav.style.top = "65px";

      nav.style.right = "20px";

      nav.style.background = "#111";

      nav.style.padding = "18px";

      nav.style.flexDirection = "column";

      nav.style.gap = "15px";

    }

  }

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 800) {

        nav.style.display = "none";

      }

    });

  });