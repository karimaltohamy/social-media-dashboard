// box filter
const btnFilter = document.querySelector(".btn_filter");
const listFilter = document.querySelector(".list_filter");

btnFilter.addEventListener("click", () => {
  listFilter.classList.toggle("active");
});

// popup login facebook
const popupLoginFacebook = document.querySelector(".popup_login_facebook");
const btnLoginFacebook = document.querySelector(".btn_login_facebook");
const overflow = document.querySelector(".overflow");
const btnCloseLoginFacebook = document.querySelector(".btn_close_login");

btnLoginFacebook.addEventListener("click", () => {
  popupLoginFacebook.classList.add("active");
  overflow.classList.add("active");
});

btnCloseLoginFacebook.addEventListener("click", () => {
  popupLoginFacebook.classList.remove("active");
  overflow.classList.remove("active");
});

// box engagement
const listEngagement = document.querySelector(".list_engagement");
const btnEngagement = document.querySelector(".btn_engagement");

btnEngagement.addEventListener("click", () => {
  listEngagement.classList.toggle("active");
});

//engagement box  handle checkbox
const checkboxsEngagement = document.querySelectorAll(
  ".engagement_box .input_check .input_reaction"
);

checkboxsEngagement.forEach((item) => {
  if (item.getAttribute("name") === "all-reaction") {
    item.addEventListener("click", () =>
      item.checked === true
        ? checkboxsEngagement.forEach((ele) => (ele.checked = true))
        : checkboxsEngagement.forEach((ele) => (ele.checked = false))
    );
  }
});
