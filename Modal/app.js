const modalButton = document.querySelector(".modal-btn");
const closeButton = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalButton.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeButton.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});