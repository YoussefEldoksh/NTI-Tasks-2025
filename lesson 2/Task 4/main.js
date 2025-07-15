let users = [
    {
        userName: "youssefeldoksh",
        password: "1234"
    }
];

let tasks = [];
let taskStatusOptions = ["Task", "In Progress", "Done"];

let taskName = document.getElementById("task-name");
let taskType = document.getElementById("task-type");
let submitButton = document.getElementById("submit-button");
let root = document.getElementById("root");

function renderTasks() {
    let htmlContent = '';

    for (let index = 0; index < tasks.length; index++) {
        const bgColor = tasks[index].taskType === "In Progress" ? "orange" :
            tasks[index].taskType === "Done" ? "green" :
                tasks[index].taskType === "Task" ? "red" : "white";

        htmlContent += `
<div class="card" style="width: 18rem;display: inline-block; margin: 1%;  background-color:${bgColor};" data-index="${index}"   >
            <button type="button" class="btn-close" aria-label="Close" style ="margin:5%; display: inline-block" ></button>

              <select class="form-select" id="floatingSelect"  style ="margin-left: 60%; width:5% ; display: inline-block">
    <option selected>Edit</option>
    <option value="1"></option>
  </select>
      <div class="card-body >
        <h5 class="card-title">Task name: ${tasks[index].taskName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Task type: ${tasks[index].taskType}</h6>
        <p class="card-text">Task starting date: ${tasks[index].dueDate}</p>
    
      </div>
      <button type="button" class="btn btn-success"  style="display: inline-block; margin:0% 0% 5% 5%;">Done</button>
      <button type="button" class="btn btn-danger" style="display: inline-block; margin:0% 0% 5% 5%;">Task</button>
      <button type="button" class="btn btn-warning" style="display: inline-block; margin:0% 0% 5% 5%;">In Progress</button>
    </div>
        `;
    }

    root.innerHTML = htmlContent;

    const closeButtons = document.getElementsByClassName("btn-close");
    Array.from(closeButtons).forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            const taskIndex = parseInt(card.getAttribute("data-index"));
            tasks.splice(taskIndex, 1);
            renderTasks();
        });
    });

    const doneButtons = document.getElementsByClassName("btn btn-success");
    const taskButtons = document.getElementsByClassName("btn btn-danger");
    const inProgressButtons = document.getElementsByClassName("btn btn-warning");

    Array.from(doneButtons).forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            if (!card) {
                console.error("Card element not found");
                return;
            }
            const taskIndex = parseInt(card.getAttribute("data-index"));
            if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
                console.error("Invalid task index:", taskIndex);
                return;
            }
            tasks[taskIndex].taskType = "Done";
            renderTasks();
        });
    });

    Array.from(taskButtons).forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            if (!card) {
                console.error("Card element not found");
                return;
            }
            const taskIndex = parseInt(card.getAttribute("data-index"));
            if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
                console.error("Invalid task index:", taskIndex);
                return;
            }
            tasks[taskIndex].taskType = "Task";
            renderTasks();
        });
    });

    Array.from(inProgressButtons).forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            if (!card) {
                console.error("Card element not found");
                return;
            }
            const taskIndex = parseInt(card.getAttribute("data-index"));
            if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
                console.error("Invalid task index:", taskIndex);
                return;
            }
            tasks[taskIndex].taskType = "In Progress";
            renderTasks();
        });
    });
}

submitButton.addEventListener("click", () => {
    const taskObject = {
        taskName: taskName.value,
        taskType: taskType.value,
        dueDate: String(new Date().toDateString())
    };

    tasks.push(taskObject);
    renderTasks();
    console.log(tasks);
}); 