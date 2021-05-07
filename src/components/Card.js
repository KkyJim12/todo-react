import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ActionCard = (props) => {
  const [stack, setStack] = useState([]);
  const [stackName, setStackName] = useState("");

  const addStack = () => {
    setStack([...stack, { name: stackName }]);
    setStackName("");
  };

  const stackCards = stack.map((item, index) => {
    return (
      <Grid item>
        <Box px={2}>
          <p>
            {index + 1}.{item.name}
          </p>
        </Box>
      </Grid>
    );
  });

  return (
    <>
      <Card style={{ minHeight: "60vh", width: "100%" }}>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="flex-end"
          bgcolor="primary.main"
        >
          <CardContent>
            {props.number + 1}.{props.name}
          </CardContent>
        </Box>
        <Box>{stackCards}</Box>
      </Card>
      <Box mt={2} mb={1}>
        <TextField
          onChange={(e) => setStackName(e.target.value)}
          variant="filled"
          label="Stack Name"
          value={stackName}
          fullWidth
        />
      </Box>
      <Box>
        <Button
          onClick={addStack}
          fullWidth
          variant="contained"
          color="primary"
        >
          Add Stack
        </Button>
      </Box>
    </>
  );
};

export default ActionCard;
