import React from "react";
import Paper from "@material-ui/core/Paper";

const LeftPanel = ({ styles, exos }) => (
  <Paper style={styles.paper}>
    left
    {console.log(exos)}
  </Paper>
);

export default LeftPanel;
