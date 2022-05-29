// show add todo section
const openSectionBtn = document.querySelector(".add-todo-btn");
const addTodoSection = document.querySelector(".add-todo-container");

openSectionBtn.addEventListener("click", () => {
    addTodoSection.classList.add("showSection");

    openSectionBtn.style.display = "none";
});

// remove add todo section
const closeSectionBtn = document.querySelector(".move-back-arrow");

closeSectionBtn.addEventListener("click", () => {
    addTodoSection.classList.remove("showSection");

    openSectionBtn.style.display = "grid";
});



const submitBtn = document.querySelector(".submit-todos-btn");
const input = document.querySelector(".todo-description");
const icons = document.querySelectorAll(".icons");
const iconClass = document.querySelector(".icon-class");

// get fontawsome icon class when user has chosen an icon
icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        iconClass.innerHTML = icon.classList[1];
    });
});

// submit todos
submitBtn.addEventListener("click", () => {
    const todoContainer = document.querySelector(".todo-list-container");

    todoContainer.innerHTML +=
    `
    <div class="list-items-container">
        <i class="todo-icon fa-solid ${iconClass.innerText}"></i>
        <div class="todo-description">${input.value}</div>
        <i class="fa-solid fa-check todo-done-btn"></i>
    </div>
    `

    const todoSum = document.querySelectorAll(".list-items-container");
    const todoCount = document.querySelector(".todo-count");

    todoCount.innerHTML = `${todoSum.length} <br> To-do's`;


    // mark done todos after user clicks done btn
    const doneTodoBtn = document.querySelectorAll(".todo-done-btn");

    doneTodoBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.parentElement.style.backgroundColor = "#9fe49c";
        });
    });
});

