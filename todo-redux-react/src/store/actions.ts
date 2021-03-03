import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { Todo, Store } from "./types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_TODOS = "SET_TODOS";

export type ActionTypes =
  | { type: typeof ADD_TODO; }
  | { type: typeof DELETE_TODO; payload: number; }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        text: string;
      }
    }
  | { type: typeof TOGGLE_TODO; payload: number; }
  | { type: typeof SET_NEW_TODO; payload: string; }
  | { type: typeof SET_TODOS; payload: Todo[]; };

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });
export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});
export const updateTodo = (id: number, text: string): ActionTypes => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEW_TODO,
  payload: text,
});
export const setTodos = (todos: Todo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});
export const getTodos = (
  url: string
): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const resp = await fetch(url);
  const todos: Todo[] = await resp.json();
  dispatch(setTodos(todos));
};