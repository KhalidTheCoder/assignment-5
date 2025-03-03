const themeBtn = document.getElementById("theme-button");

function randomColor() {
  const colors = ["red", "green", "blue", "orange", "pink", "purple", "yellow"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

themeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
});

const buttons = document.getElementsByClassName("task-btn");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    alert("Board Updated Successfully");

    if (buttons.length === 1) {
      alert("Congrats!!! You have completed all the current task");
    }
    event.target.classList.remove("task-btn");
    event.target.classList.add("bg-gray-300");
    event.target.setAttribute("disabled", "");
  });
}
