const sidebar = document.querySelector(".sidebar");
const contentPage = document.querySelector(".content_page");
const btnMenu = document.querySelector(".icon_menu");

btnMenu.addEventListener("click", () => {
  sidebar.classList.toggle("remove_elemnts");
  sidebar.classList.toggle("close_sidebar");
  contentPage.classList.toggle("close_sidebar");
});
