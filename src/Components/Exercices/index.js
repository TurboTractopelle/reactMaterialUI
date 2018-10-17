import React, { fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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

const Exercices = ({ exos, test, category, onSelect, exercice }) => {
  const { id, title = "Welcome", description = "Click somewhere" } = exercice;
  return (
    <Grid container>
      <Grid item xs>
        <Paper style={styles.paper}>
          {exos.map(
            ([group, exosGroup]) =>
              category === "All" || category === group ? (
                <fragment key={group}>
                  <Typography
                    variant="h5"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>

                  <List component="ul">
                    {exosGroup.map(({ title, id }, i) => (
                      <ListItem button key={i} onClick={() => onSelect(id)}>
                        <ListItemText primary={title} disableTypography />
                      </ListItem>
                    ))}
                  </List>
                </fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.paper}>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="body">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercices;
