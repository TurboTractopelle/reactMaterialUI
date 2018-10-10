import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Exercices = () => (
  <Grid container>
    <Grid item xs>
      <LeftPanel styles={styles} />
    </Grid>
    <Grid item xs>
      <RightPanel styles={styles} />
    </Grid>
  </Grid>
);

export default Exercices;
