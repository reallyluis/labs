import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { SetTodosType } from "../store";
import data from "../todos.json";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar({ setTodos }: { setTodos: SetTodosType }) {
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={() => setTodos(data)}>Load</Button>
    </Grid>
  );
}

export default TopBar;