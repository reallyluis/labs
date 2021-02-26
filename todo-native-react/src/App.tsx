import React from 'react';
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useTodos } from "./store";

function App() {
  const [todos, setTodos] = useTodos([]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar setTodos={setTodos} />
        <TodoAdd todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
