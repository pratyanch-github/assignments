let globalId = 1;
let oldTodoState = [];

function cancelDelete(tidLast, todoid) {
    clearTimeout(tidLast);
    let btn = document.getElementById("del" + todoid);
    let todo = document.getElementById(todoid);
    todo.removeChild(btn);
}

function removeTodoFromDom(idtor)  // argument is todoid
{

    // created undobtn
    let todo = document.getElementById(idtor);
    let undobtn = document.createElement('button');
    undobtn.setAttribute("id", "del" + idtor);
    undobtn.innerText = " Cancel Delete";

    // display 5 sec timeer on undobtn
    let tidLast;
    for (let i = 0; i <= 4; i++) {
        let tid = setTimeout(() => {
            undobtn.innerText = ` Undo ${5 - i}`;
            if (i == 4) {
                oldTodoState = oldTodoState.filter((el) => {
                    return el.id != idtor;
                });
                updateState(oldTodoState);
            }
        }, (i + 1) * 1000);

        if (i == 4) tidLast = tid;
        // timeoutList.push(tid); 
    }
    undobtn.setAttribute("onclick", `cancelDelete(${tidLast}, ${idtor})`);
    todo.appendChild(undobtn);
}

function addTodoToDom() {
    //iterate over oldTodoState
    //then for each todo obj, create a new div element with title,description and id
    //then display then entire list of todo elements


    let listOfElement = [];
    for (let obj of oldTodoState) {
        var htmlEl = document.createElement("div");
        htmlEl.setAttribute("id", obj.id);
        htmlEl.setAttribute("class", "todo");
        console.log(htmlEl);
        htmlEl.innerHTML = `<h1>Title : ${obj.title}</h1><h2>Description : ${obj.description}<h2>`;
        let Button = document.createElement("button");
        Button.setAttribute("onclick", `removeTodoFromDom(${obj.id})`);
        Button.innerText = "Delete";
        htmlEl.appendChild(Button);
        listOfElement.push(htmlEl);
    }

    //render todolist
    let root = document.getElementById("todos");
    root.innerHTML = "";
    for (let el of listOfElement) {
        root.appendChild(el);
    }

    // console.log(listOfElement)

}


// function updateTodoInDom(oldTodo, newTodo) {

// }

function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are - 
    // 1. added
    // 2. deleted
    // 3. updated
    const added = [];
    const deleted = [];
    const updated = [];
    // calculate these 3 arrays
    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements
    oldTodoState = newTodos;
    addTodoToDom();
}

function addTodo(ram) {
    console.log(ram); // rest for parameters
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    oldTodoState.push({
        title: title,
        description: description,
        id: globalId++,
    })
    updateState(oldTodoState);

}