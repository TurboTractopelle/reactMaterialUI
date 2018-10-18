import React, { fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';

class Create extends Component {
  state = {
    open: false,
    exercice : {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  handleChange = (name) => (event) => {
    const valeur = event.target.value;
    this.setState((prevState)=>{
      console.log(this.state.exercice)
      return { ...prevState, exercice: { ...prevState.exercice, [name]: valeur } }
    })
  }

  render() {
    const { open, exercice } = this.state;
    const {title, description, muscles} = exercice
    return (
      <fragment>
        <Button onClick={this.handleToggle} variant="fab" mini>
          <AddIcon />
        </Button>

        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title" variant="h1" disableTypography>
            Create a new exercice
          </DialogTitle>
          <DialogContent>
            <DialogContentText variant="body">
              Fill the form below
            </DialogContentText>
            <form >
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
            </form>
            <form >
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </fragment>
    );
  }
}

export default Create;
