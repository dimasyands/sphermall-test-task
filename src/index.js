const popup = document.querySelector("#popup");
const closePopup = popup.querySelector(".popup-close");
const openPopup = popup.querySelector(".what-can-do-popup-button");
const page = document.querySelector(".page");


closePopup.addEventListener("click", function () {
  popup.classList.remove("show-modal");
  page.classList.remove("scroll-off");
});

function onPopupOpenClick() {
  popup.classList.add("show-modal");
  page.classList.add("scroll-off");
}


