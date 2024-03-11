import React from "react";
class AddComponent extends React.Component {
  state = {
    id: "",
    name: "",
    salary: "",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleClickSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.salary) {
      alert("Please fill all fields!");
      return;
      
    }
    console.log("Submit", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      name: this.state.name,
      salary: this.state.salary,
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's title</label>
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <br />
        <label htmlFor="fname">Salary</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleOnChangeSalary(event)}
        />
        <br />
        <input
          type="submit"
          onClick={(event) => this.handleClickSubmit(event)}
          value="Submit"
        />
        <br />
      </form>
    );
  }
}
export default AddComponent;
