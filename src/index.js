const popup = document.querySelector("#popup");
const closePopup = popup.querySelector(".popup-close");
const openPopup = popup.querySelector(".what-can-do-popup-button");


closePopup.addEventListener("click", function () {
  popup.classList.remove("show-modal");
});

function onPopupOpenClick() {
  popup.classList.add("show-modal");
}


