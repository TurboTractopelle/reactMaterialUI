import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

/*
value={this.state.value}
onChange={this.handleChange}
*/

const Footer = () => (
  <Paper>
    <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);

export default Footer;
