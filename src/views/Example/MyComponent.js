import React from "react";
import ChildExample from "./childEx";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    name: "",
    salary: "",
    arrJobs: [
      { id: "1", name: "IT", salary: "2000" },
      { id: "2", name: "Marketting", salary: "3000" },
      { id: "3", name: "Teacher", salary: "4000" },
    ],
  };
  addNewJob = (job) => {
    //Cach 1
    this.setState({ arrJobs: [...this.state.arrJobs, job] });
    //Cach 2
    let currentJob = this.state.arrJobs;
    currentJob.push(job);
    this.setState({
      arrJobs: currentJob,
    });
  };
  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter(item =>item.id !== job.id);
    this.setState({ 
      arrJobs: currentJob
    })
  };
  render() {
    return (
      <div>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildExample 
        arrJobs={this.state.arrJobs}
        deleteAJob={this.deleteAJob}
        ></ChildExample>
      </div>
    );
  }
}
export default MyComponent;
