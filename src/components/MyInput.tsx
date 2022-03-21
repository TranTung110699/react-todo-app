import React, { Component } from "react";

interface FormInputProps {
  onChangeInput: (inputValue: string) => void;
}

export class MyInput extends Component<FormInputProps> {
  state = {
    inputValue: "",
  };

  handleClick = () => {
    if (!this.state.inputValue) {
      return;
    }

    this.props.onChangeInput(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className="main">
        <input
          type="text"
          placeholder="Add to do"
          onChange={(e) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            e.target.value;
            this.setState({
              inputValue: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              this.handleClick();
            }
          }}
          value={this.state.inputValue}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default MyInput;
