import React, { fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

class Create extends Component {
  constructor(props) {
    super(props);
    this.categories = this.props.muscles;
    this.submit = this.props.submitExercice;
  }

  state = {
    open: false,
    exercice: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => this.setState(prevState => ({ open: !prevState.open }));

  handleChange = name => event => {
    const valeur = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        exercice: { ...prevState.exercice, [name]: valeur }
      };
    });
  };

  handleSubmit = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        open: false,
        exercice: { title: "", description: "", muscles: "" }
      };
    });
    this.submit(this.state.exercice);
  };

  render() {
    const { open, exercice } = this.state;
    const { title, description, muscles } = exercice;
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
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br />
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="select-cat">Category</InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                  inputProps={{
                    id: "select-cat"
                  }}
                >
                  {this.categories.map(item => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} variant="contained">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </fragment>
    );
  }
}

export default Create;
