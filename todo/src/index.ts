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
let showCompleted = true;

function displayTodoList(): void {
  console.log(`${collection.userName} Todo List`
    + `(${collection.getItemCounts().incomplete} items to do)`);
  collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
  Add = "Add New Task",
  Complete = "Complete Task",
  Toggle = "Show/Hide Completed",
  Purge = "Remove Completed Tasks",
  Quit = "Quit"
}

function promptAdd(): void {
  console.clear();
  inquirer.prompt({
    type: "input",
    name: "add",
    message: "Enter task:"
  }).then(answers => {
    if (answers["add"] !== "") {
      collection.addTodo(answers["add"]);
    }
    propmtUser();
  })
}

function promptComplete(): void {
  console.clear();
  inquirer.prompt({
    type: "checkbox",
    name: "complete",
    message: "Mark Tasks Complete",
    choices: collection.getTodoItems(showCompleted).map(item => ({
      name: item.task,
      value: item.id,
      checked: item.complete
    }))
  }).then(answers => {
    let completedTasks = answers["complete"] as number[];
    collection.getTodoItems(true).forEach(item => (
      collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined)));
    propmtUser();
  })
}

function propmtUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
    // badProperty: true
  }).then(answers => {
    switch (answers["command"]) {
      case Commands.Toggle:
        showCompleted = !showCompleted;
        propmtUser();
        break;
      case Commands.Add:
        promptAdd();
        break;
      case Commands.Complete:
        if (collection.getItemCounts().incomplete > 0) {
          promptComplete();
        } else {
          propmtUser();
        }
        break;
      case Commands.Purge:
        collection.removeComplete();
        propmtUser();
        break;
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