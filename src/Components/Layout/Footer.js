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

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={index}
        //onChange={onSelect}
      >
        <Tab label="All" variant="h5" />
        {muscles.map((muscle, i) => <Tab label={muscle} key={i} />)}
      </Tabs>
    </Paper>
  );
};

export default Footer;
