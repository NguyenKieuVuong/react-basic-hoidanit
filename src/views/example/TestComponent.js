import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class TestComponent extends React.Component {
  state = {
    arrayDev: [
      {
        id: 1,
        jobs: "frontend dev",
        salary: "600",
      },
      {
        id: 2,
        jobs: "backend dev",
        salary: "800",
      },
      {
        id: 3,
        jobs: "project manager",
        salary: "1200",
      },
    ],
  };
  addAJobs = (job) => {
    console.log("variable job: ", job);
    // let arrayclone = this.state.arrayDev;
    this.setState({
      //arrayDev: this.state.arrayDev.push(job),
      arrayDev: [...this.state.arrayDev, job],
    });
  };
  deleteARows = (id) => {
    let newArray = this.state.arrayDev;
    newArray = newArray.filter((item, index) => item.id !== id);
    // this.setState({
    //   arrayDev: newArray,
    // });
    // for (let i = 0; i < newArray.length; i++) {
    //   console.log("i: ", [i]);
    //   console.log("newArray[i].id: ", newArray[i].id);
    //   if (newArray[i].id == id) newArray.splice([i], 1);
    // }

    //console.log("id: ", id);
    //newArray.splice(id, 1);
    //console.log("newArray: ", newArray);
    this.setState({
      arrayDev: newArray,
    });
    //console.log("arrayDev: ", this.state.arrayDev);
  };
  render() {
    return (
      <>
        <AddComponent addAJobs={this.addAJobs}></AddComponent>

        <ChildComponent
          name={"Huệ"}
          classroom={"IT"}
          age={"20"}
          arrayDev={this.state.arrayDev}
          deleteARows={this.deleteARows}
        />
      </>
    );
  }
}
export default TestComponent;
