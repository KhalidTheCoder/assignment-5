const themeBtn = document.getElementById("theme-button");

function randomColor() {
  const colors = ["red", "green", "blue", "orange", "pink", "purple", "yellow"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
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

let completedTask = parseInt(
  document.getElementById("task-completed").innerText
);
let assignedTask = parseInt(document.getElementById("assigned-task").innerText);
const firstTitle = document.getElementById("first-title").innerText;

const activityLog = document.getElementById("activity-log");

document.getElementById("mobile-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${firstTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

const secondTitle = document.getElementById("second-title").innerText;
document.getElementById("pay-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${secondTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

const thirdTitle = document.getElementById("third-title").innerText;
document.getElementById("home-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${thirdTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

const fourthTitle = document.getElementById("fourth-title").innerText;
document.getElementById("emoji-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${fourthTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

const fifthTitle = document.getElementById("fifth-title").innerText;
document.getElementById("ai-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${fifthTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

const sixthTitle = document.getElementById("sixth-title").innerText;
document.getElementById("job-btn").addEventListener("click", function () {
  completedTask = completedTask + 1;
  document.getElementById("task-completed").innerText = completedTask;

  assignedTask = assignedTask - 1;
  document.getElementById("assigned-task").innerText = assignedTask;

  const activityAdd = document.createElement("p");
  activityAdd.textContent = `You have Complete The Task ${sixthTitle} at ${getCurrentTime()}`;
  activityAdd.classList.add(
    "text-gray-700",
    "my-3",
    "w-[318px]",
    "h-[68px]",
    "bg-[#F4F7FF]",
    "p-2",
    "rounded-xl"
  );
  activityLog.appendChild(activityAdd);
});

document.getElementById("clear-btn").addEventListener("click", function () {
  activityLog.replaceChildren();
});

document.getElementById("date").innerHTML =
  new Date().toLocaleDateString("en-US", { weekday: "short" }) +
  " ,<br>" +
  new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

document.getElementById("new-window").addEventListener("click", function () {
  window.location.href = "new.html";
});
