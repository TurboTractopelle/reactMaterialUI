import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Creat from "../Exercices/Dialogs/Create";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit">
        Exercices database
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
