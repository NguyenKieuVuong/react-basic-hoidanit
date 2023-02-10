import React from "react";
import "../../styles/listTodo.scss";
import AddTodo from "./AddTodo";
//import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "code landing page" },
      { id: "todo3", title: "code register" },
    ],
  };
  addNewTodo = (todo) => {
    //let currentListTodo = this.state.listTodos;
    //currentListTodo.push(todo);
    this.setState({
      listTodos: [...this.state.listTodos, todo],
      //listTodos: currentListTodo,
    });
    //toast.success("wow ok!");
  };
  render() {
    //let listTodos = this.state.listTodos;
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo}></AddTodo>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span className="text">
                    {index + 1}/ {item.title}
                  </span>
                  <div>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
