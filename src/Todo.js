import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "purple",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todoProp;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {""}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default Todo;
