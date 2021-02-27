import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Practice", todos);

function displayTodoList(): void {
  console.log(`${collection.userName} Todo List`
    + `(${collection.getItemCounts().incomplete} items to do)`);
  collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
  Quit = "Quit"
}

function propmtUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
  }).then(answers => {
    if (answers["command"] !== Commands.Quit) {
      propmtUser();
    }
  })
}

propmtUser();

// console.clear();

// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());

// let newId: number = collection.addTodo("Go for run");
// collection.markComplete(newId, true);
// let todoItem: TodoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem));

// todoItem.printDetails();

// // collection.addTodo(todoItem);