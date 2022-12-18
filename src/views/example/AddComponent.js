import React from "react";

class AddComponent extends React.Component {
  state = {
    jobs: "",
    salary: "",
  };
  handleChangeJobsTitle = (event) => {
    this.setState({
      jobs: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleSubmit = () => {
    console.log(">>> this state: ", this.state);
    this.props.addAJobs({
      id: Math.floor(Math.random() * 1012),
      jobs: this.state.jobs,
      salary: this.state.salary,
    });
  };
  deleteAJobs=()=>{
    
  }
  render() {
    return (
      <div>
        <label htmlFor="fname">Jobs title:</label>
        <br />
        <input
          type="text"
          id="fname"
          value={this.state.jobs}
          onChange={(event) => this.handleChangeJobsTitle(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          id="lname"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <br />
        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>
      </div>
    );
  }
}
export default AddComponent;
