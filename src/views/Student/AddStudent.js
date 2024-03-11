import React from "react";
import {  toast } from "react-toastify";
class AddStudent extends React.Component {
  state = {
    name: "",
  };
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleAddStudent = () => {
    if (!this.state.name) {
      toast.error("Please select a name!");
      return;
    }
    let student = {
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
    };
    this.props.addNewStudent(student);
    toast.success('Student added successfully')
  };
  render() {
    let { name } = this.state;
    return (
      <div className="add-student">
        <input
          onChange={(event) => this.handleChangeName(event)}
          type="text"
          value={name}
        />
        <button
          onClick={() => this.handleAddStudent()}
          className="add"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddStudent;
