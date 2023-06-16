const sidebar = document.querySelector(".sidebar");
const contentPage = document.querySelector(".content_page");
const btnMenu = document.querySelector(".icon_menu");
const overflowSidebar = document.querySelector(".overflow_sidebar");

btnMenu.addEventListener("click", () => {
  sidebar.classList.toggle("remove_elemnts");
  sidebar.classList.toggle("close_sidebar");
  contentPage.classList.toggle("close_sidebar");

  if (innerWidth < 768) {
    overflowSidebar.classList.toggle("active");
  }
});

if (innerWidth < 768) {
  sidebar.classList.add("remove_elemnts");
  sidebar.classList.add("close_sidebar");
  contentPage.classList.add("close_sidebar");
} else {
  sidebar.classList.remove("remove_elemnts");
  sidebar.classList.remove("close_sidebar");
  contentPage.classList.remove("close_sidebar");
}

window.addEventListener("resize", () => {
  if (innerWidth < 768) {
    sidebar.classList.add("remove_elemnts");
    sidebar.classList.add("close_sidebar");
    contentPage.classList.add("close_sidebar");
  } else {
    sidebar.classList.remove("remove_elemnts");
    sidebar.classList.remove("close_sidebar");
    contentPage.classList.remove("close_sidebar");
  }
});

// list links
const items = document.querySelectorAll(".mini_list .link_item");
const lists = document.querySelectorAll(".mini_list .list");

items.forEach((item) => {
  item.addEventListener("click", () => {
    let num = item.getAttribute("data-num");

    document.querySelector(`.list${num}`).classList.toggle("open");
  });
});
