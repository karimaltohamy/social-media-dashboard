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
