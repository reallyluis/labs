import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { getTodos } from "../store/actions";

const DATA_URL = "https://raw.githubusercontent.com/reallyluis/labs/main/todo-redux-react/src/data/todos.json";

function TopBar(): React.ReactElement {
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button
        onClick={() => dispatch(getTodos(DATA_URL))}
      >Load</Button>
    </Grid>
  );
}

export default TopBar;