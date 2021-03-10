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
  }
}
