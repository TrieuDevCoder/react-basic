import React from "react";
import AddStudent from "./AddStudent";
import { toast } from "react-toastify";
class Student extends React.Component {
  state = {
    listStudents: [
      { id: 1, name: "Hazard" },
      { id: 2, name: "Messi" },
      { id: 3, name: "Ronaldo" },
    ],
    editStudent: {},
  };
  addNewStudent = (student) => {
    this.setState({
      listStudents: [...this.state.listStudents, student],
    });
  };
  handleDeleteStudent = (student) => {
    let currentStudent = this.state.listStudents;
    currentStudent = currentStudent.filter((item) => item.id !== student.id);
    this.setState({ listStudents: currentStudent });
    toast.success("Student deleted successfully");
  };
  handleUpdateStudent = (student) => {
    let { editStudent, listStudents } = this.state;
    let isEmptyObj = Object.keys(editStudent).length === 0;
    if (isEmptyObj === false && editStudent.id === student.id) {
      let listStudentCopy = [...listStudents];
      let objIndex = listStudentCopy.findIndex(
        (item) => item.id === student.id
      );
      listStudentCopy[objIndex].name = editStudent.name;
      this.setState({ listStudents: listStudentCopy, editStudent: {} });
      console.log("Student updated successfully");
    } else {
      this.setState({
        editStudent: student,
      });
    }
  };
  handleOnchangeEditStudent = (event) => {
    let editStudentCopy = { ...this.state.editStudent };
    editStudentCopy.name = event.target.value;
    this.setState({ editStudent: editStudentCopy });
  };
  render() {
    let { listStudents, editStudent } = this.state;
    let isEmptyObj = Object.keys(editStudent).length === 0;
    return (
      <div className="list-student-container">
        <AddStudent addNewStudent={this.addNewStudent} />
        <div className="table-student">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listStudents.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    {isEmptyObj === true ? (
                      item.name
                    ) : editStudent.id === item.id ? (
                      <input
                        type="text"
                        onChange={(event) =>
                          this.handleOnchangeEditStudent(event)
                        }
                        value={editStudent.name}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleUpdateStudent(item)}
                      className="edit"
                      type="button"
                    >
                      {isEmptyObj === false && editStudent.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      onClick={() => this.handleDeleteStudent(item)}
                      className="delete"
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Student;
