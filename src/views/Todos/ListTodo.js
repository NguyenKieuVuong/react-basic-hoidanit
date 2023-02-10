import React from "react";
import "../../styles/listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "code landing page" },
      { id: "todo3", title: "code register" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    //let currentListTodo = this.state.listTodos;
    //currentListTodo.push(todo);
    this.setState({
      listTodos: [...this.state.listTodos, todo],
      //listTodos: currentListTodo,
    });
    toast.success("Add new ok!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;

    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    // for (let i = 0; i < currentTodos.length; i++) {
    //   if (currentTodos[i].id === todo.id) currentTodos.splice([i], 1);
    // }
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("delete ok!");
  };
  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let copylistTodos = [...this.state.listTodos];

      //Find index of specific object using findIndex method.
      let objIndex = copylistTodos.findIndex((obj) => obj.id === todo.id);

      //Update object's name property.
      copylistTodos[objIndex].title = editTodo.title;
      this.setState({ listTodos: copylistTodos, editTodo: {} });
      toast.success("update ok!");

      return;
    }
    console.log("check empty object: ", isEmptyObj);
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    //let listTodos = this.state.listTodos;
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span className="text">
                      {index + 1}/ {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1}/{" "}
                          <input
                            type="text"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span className="text">
                          {index + 1}/ {item.title}
                        </span>
                      )}
                    </>
                  )}
                  {/* <span className="text">
                    {index + 1}/ {item.title}
                  </span>
                  <input value={item.title} /> */}
                  <div>
                    <button
                      className="btn-edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
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
