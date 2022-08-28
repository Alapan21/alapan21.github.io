const navigation = document.getElementById("nav");
const hamburgerMenuBtn = document.getElementById("hamburger-button");
const navigationList = document.getElementById("nav-list");

const navigationLinks = document.querySelectorAll(".nav-list-item");

navigationLinks.forEach((el) => {
  console.log(el);
  el.scrollIntoView();
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      navigationLinks.forEach((others) => {
        others.classList.remove("active");
      });
      el.classList.add("active");
    }
  });
});

hamburgerMenuBtn.onclick = () => {
  console.log("menu opened");
  navigation.classList.toggle("bg-red-500");
  hamburgerMenuBtn.classList.toggle("active");
  navigationList.classList.toggle("h-screen");
  navigationList.classList.toggle("hidden");
};

// function onScroll(event) {
//   var scrollPos = document.scrollPos(0, 0);
//   $("#menu-center a").each(function () {
//     var currLink = $(this);
//     var refElement = $(currLink.attr("href"));
//     if (
//       refElement.position().top <= scrollPos &&
//       refElement.position().top + refElement.height() > scrollPos
//     ) {
//       $("#menu-center ul li a").removeClass("active");
//       currLink.addClass("active");
//     } else {
//       currLink.removeClass("active");
//     }
//   });
// }
