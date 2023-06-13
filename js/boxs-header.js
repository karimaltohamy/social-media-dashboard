const navItems = document.querySelectorAll(".nav_item");

navItems.forEach((item) => {
  item.children[0].addEventListener("click", () => {
    item.children[1].classList.toggle("active");
  });
});
