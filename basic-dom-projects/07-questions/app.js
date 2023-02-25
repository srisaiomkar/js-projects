// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const questionBtn = question.querySelector(".question-btn");

  questionBtn.addEventListener("click", function () {
    questions.forEach(function (q) {
      if (q != question) {
        q.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
