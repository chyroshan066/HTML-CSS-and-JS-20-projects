const newToDoInput = document.querySelector("#newToDoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

addTodoBtn.addEventListener("click", () => {
    const newTodoText = newToDoInput.value;

    if(newTodoText !== ""){
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", () => {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);

        todoList.appendChild(newTodoItem);
        newToDoInput.value = "";
    }
})