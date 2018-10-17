import React, { fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";

class Create extends Component {
  state = {
    open: false
  };

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  render() {
    const { open } = this.state;
    return (
      <fragment>
        <Button onClick={this.handleToggle} variant="fab" aria-label="Add" mini>
          <AddIcon />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" variant="title">
            Create a new exercice
          </DialogTitle>
          <DialogContent>
            <DialogContentText variant="body">
              Fill the form below
            </DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="text">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </fragment>
    );
  }
}

export default Create;
