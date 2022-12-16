import React from "react";

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    // let name = this.props.name;
    let { name, classroom, age } = this.props;
    // biến đặt phải trùng với name props khai báo
    return (
      <>
        <div>
          {this.props.name} học React JS - Lớp: {classroom} - Tuổi:
          {age}
        </div>
      </>
    );
  }
}
export default ChildComponent;
