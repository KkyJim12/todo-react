import { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ActionCard from "./components/Card";
import Error from "./components/Error";

const App = () => {
  const [actionName, setActionName] = useState("");

  const [actionNameError, setActionNameError] = useState("");

  const [listCount, setListCount] = useState([{ name: "Todo" }]);

  const addList = () => {
    if (actionName.length === 0) {
      setActionNameError("Please Type Name !!");
      return;
    }
    setActionNameError("");
    setListCount([...listCount, { name: actionName }]);
    setActionName("");
  };

  const setMock = () => {
    setListCount([{ name: "Todo" }, { name: "In Progress" }, { name: "Done" }]);
  };

  const clearMock = () => {
    setListCount([{ name: "Todo" }]);
  };

  const lists = listCount.map((item, index) => {
    return (
      <Grid item md="2">
        <ActionCard name={item.name} number={index} />
      </Grid>
    );
  });

  return (
    <>
      <Container
        maxWidth
        style={{
          backgroundColor: "#d97687",
          minHeight: "100vh",
          padding: "4rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md="12">
            <h1>React Easy Todo List</h1>
          </Grid>
          <Grid item md="12">
            {actionNameError && <Error message={actionNameError} />}
          </Grid>
          <Grid item md="4">
            <TextField
              onChange={(e) => setActionName(e.target.value)}
              variant="filled"
              label="Name"
              value={actionName}
              fullWidth
            />
          </Grid>
          <Grid item md="8" spacing={2} container>
            <Grid item>
              <Button onClick={addList} variant="contained" color="primary">
                Add List
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={setMock} variant="contained" color="secondary">
                Set Mock
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={clearMock} variant="contained" color="default">
                Clear
              </Button>
            </Grid>
          </Grid>

          <Grid item container direction="row" spacing={3}>
            {lists}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
