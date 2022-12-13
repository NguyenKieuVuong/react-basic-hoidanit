import React from "react";

class TestComponent extends React.Component {
  state = {
    name: "Lân",
    Class: "IT",
  };
  render() {
    return (
      <>
        <div>
          <input type="text" value={this.state.name} />
        </div>
        <div>Tôi học Reactjs.Tên là {this.state["name"]}</div>
        <div>Phòng ban: {this.state.Class}</div>
      </>
    );
  }
}
export default TestComponent;
