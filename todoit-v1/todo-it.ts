console.log("TodoIt");

const todoList: string[] = [];
console.log("Current todo list: ", todoList);

const todoInput: HTMLInputElement = document.getElementById('todoInput') as HTMLInputElement;
function addTodo(): void {
  if (todoInput === null) {
    console.log('The todo input is missing from the page!');
    return;
  }

  const newTodo: string = todoInput.value;

  if ('' !== newTodo.trim()) {
    console.log('Adding todo: ', newTodo);

    todoList.push(newTodo);
    console.log('New todo list: ', todoList);

    todoInput.value = '';

    // keep the list sorted
    todoList.sort();

    // update the todo list
    updateTodoList();

    // apply the todo list filter
    filterTodoList();
  }
}

const todoListDiv: HTMLDivElement = document.getElementById('todoListContainer') as HTMLDivElement;
function updateTodoList(): void {
  console.log("Updating the rendered todo list");
  todoListDiv.innerHTML = '';
  todoListDiv.textContent = ''; // Edge, ...

  const ul = document.createElement('ul');
  ul.setAttribute('id', 'todoList');
  todoListDiv.appendChild(ul);

  todoList.forEach(item => {
    const li = document.createElement('li');
    li.setAttribute('class', 'todo-list-item');
    li.innerText = item;
    ul.appendChild(li);
  })
}

function filterTodoList(): void {
  console.log("Filtering the rendered todo list");

  const todoListHtml: HTMLUListElement = document.getElementById('todoList') as HTMLUListElement;

  if (todoListHtml === null) {
    console.log("Nothing to filter");
    return;
  }

  const todoListFilter = document.getElementById('todoFilter') as HTMLInputElement;
  const todoListFilterText = todoListFilter.value.toUpperCase();

  todoListHtml.childNodes.forEach((item) => {
    let itemText: string | null = item.textContent;

    if (itemText !== null) {
      itemText = itemText.toUpperCase();

      if (itemText.startsWith(todoListFilterText)) {
        (item as HTMLLIElement).style.display = "list-item";
      } else {
        (item as HTMLLIElement).style.display = "none";
      }
    }
  });
}