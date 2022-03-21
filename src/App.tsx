import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyInput from "./components/MyInput";
import TodoForm from "./components/TodoForm";

import { MyTodo } from "./model/todo";

class App extends Component {
  state = {
    arr: [] as MyTodo[],
  };

  handleChange = (data: string) => {
    this.state.arr.push({
      value: data,
      statusTodo: false,
    });
    this.setState({ arr: this.state.arr });
    console.log(this.state.arr);
  };

  deleteItem = (index: number) => {
    this.state.arr.splice(index, 1);
    this.setState({
      arr: this.state.arr,
    });
    console.log(this.state.arr);
  };

  toggleItem = (index: number) => {
    this.state.arr[index].statusTodo = !this.state.arr[index].statusTodo;

    this.setState({
      arr: this.state.arr,
    });
    console.log(this.state.arr);
  };

  render() {
    return (
      <div className="App">
        <p>Huong dan su dung</p>

        <MyInput onChangeInput={this.handleChange} />

        <ul>
          {this.state.arr.map((item, index) => {
            return (
              <TodoForm
                index={index}
                item={item}
                toggleItem={this.toggleItem}
                deleteItem={this.deleteItem}
              />
            );
          })}
        </ul>
        {/* <MyInput onChange={this.handleChange} /> */}
      </div>
    );
  }
}

export default App;
