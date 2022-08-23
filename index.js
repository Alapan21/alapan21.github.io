const navigation = document.getElementById("nav");
const hamburgerMenuBtn = document.getElementById("hamburger-button");
const navigationList = document.getElementById("nav-list");

const navigationLinks = document.querySelectorAll(".nav-list-item");

navigationLinks.forEach((el) => {
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
