import React from "react";

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  pushAIDRow = (id) => {
    console.log("id: ", id);
    this.props.deleteARows(id);
  };
  render() {
    // let name = this.props.name;
    let { name, classroom, age, arrayDev } = this.props;
    // biến đặt phải trùng với name props khai báo
    return (
      <>
        <div>
          {arrayDev.map((item, index) => {
            //console.log(">>> item: ", item, ">>> index: ", index);
            return (
              <div key={item.id}>
                {item.jobs} - {item.salary}$&nbsp;
                <span onClick={(id) => this.pushAIDRow(item.id)}>X</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default ChildComponent;
