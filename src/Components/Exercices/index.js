import React, { fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    overflowY: "auto"
  }
};

const Exercices = ({ exos, test }) => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.paper}>
        {console.log(exos)}
        {exos.map(([group, exosGroup]) => (
          <fragment>
            <Typography variant="h5" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>

            <List component="ul">
              {exosGroup.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.paper}>
        <Typography variant="h4">Welcome</Typography>

        <Typography variant="body">
          Please select an exercice from the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);

export default Exercices;
