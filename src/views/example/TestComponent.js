import React from "react";

class TestComponent extends React.Component {
  state = {
    name: "Lân",
    Class: "IT",
  };
  onHandleChangeValue = (event) => {
    console.log(">> event target value", event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.onHandleChangeValue(event)}
          />
        </div>
        <div>Tôi học Reactjs.Tên là {this.state["name"]}</div>
        <div>Phòng ban: {this.state.Class}</div>
      </>
    );
  }
}
export default TestComponent;
