const questionButtons = document.querySelectorAll(".question-btn");
const questionText = document.querySelector(".question-text");

questionButtons.forEach(function (questionButton) {
  questionButton.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});