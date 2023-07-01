function filterBox() {
  try {
    const btnFilter = document.querySelector(".btn_filter");
    const listFilter = document.querySelector(".list_filter");

    btnFilter.addEventListener("click", () => {
      listFilter.classList.toggle("active");
    });
  } catch (error) {
    console.error(error);
  }
}

function boxEngagement() {
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
}

filterBox();

boxEngagement();
