import React from "react";
import ChildComponent from "./ChildComponent";
class TestComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleSubmit = () => {
    console.log(">>> this state: ", this.state);
  };
  render() {
    return (
      <>
        <div>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <button type="button" onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </div>
        <ChildComponent name={"Huệ"} classroom={"IT"} age={"20"} />
        <ChildComponent name={"Hiếu"} classroom={"Giáo viên"} age={"22"} />
        <ChildComponent name={"Lân"} classroom={"Giáo viên IT"} age={"23"} />
      </>
    );
  }
}
export default TestComponent;
