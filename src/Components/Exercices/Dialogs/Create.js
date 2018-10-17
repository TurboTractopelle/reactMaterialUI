import React, { fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";

const Create = props => (
  <fragment>
    <Button
      onClick={this.handleClickOpen}
      variant="fab"
      color="primary"
      aria-label="Add"
      size="small"
    >
      <AddIcon />
    </Button>

    <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create a new exercice</DialogTitle>
      <DialogContent>
        <DialogContentText>Fill the form below</DialogContentText>
        <form />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </fragment>
);

export default Create;
