import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Create from "../Exercices/Dialogs/Create";

const Header = ({ muscles, submitExercice }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
        Exercices database
      </Typography>
      <Create muscles={muscles} submitExercice={submitExercice} />
    </Toolbar>
  </AppBar>
);

export default Header;
