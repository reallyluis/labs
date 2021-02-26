// Standard interface and functions
import React from 'react';
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Base React Implementation
const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);
type UseTodosType = ReturnType<typeof useTodos>;

const TodosContext = React.createContext<UseTodosType | null>(null);

export const useTodosContext = () => React.useContext(TodosContext)!;

export const TodosProvider = ({ children }: { children: React.ReactNode }) => (
  <TodosContext.Provider value={useTodos([])}>
    {children}
  </TodosContext.Provider>
)
