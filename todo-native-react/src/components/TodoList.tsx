import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { TodosType, SetTodosType, toggleTodo, updateTodo, removeTodo } from "../store";

function TodoListItems({ todos, setTodos }: { todos: TodosType, setTodos: SetTodosType }) {
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => setTodos(toggleTodo(todos, todo.id))} />
          <Input mx={2} value={todo.text} onChange={(e) => setTodos(updateTodo(todos, todo.id, e.target.value))} />
          <Button onClick={() => setTodos(removeTodo(todos, todo.id))}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({ todos, setTodos }: { todos: TodosType, setTodos: SetTodosType }) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;