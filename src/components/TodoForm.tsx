import React, { Component } from "react";
import { MyTodo } from "../model/todo";

interface TodoPros {
  index: number;
  item: MyTodo;
  toggleItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

class TodoForm extends Component<TodoPros> {
  render() {
    const { index, item, toggleItem, deleteItem } = this.props;

    return (
      <li
        key={index}
        style={{ backgroundColor: item.statusTodo === true ? "green" : "red" }}
      >
        <div>
          <a>
            {item.value}-
            {item.statusTodo === true ? "completed" : "not complete"}
          </a>
          <span></span>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(index);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              toggleItem(index);
            }}
          >
            Change
          </button>
        </div>
      </li>
    );
  }
}

export default TodoForm;
