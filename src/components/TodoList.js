import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import {getTodosByVisibilityFilter} from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: getTodosByVisibilityFilter(state)
  }
}

export default connect(mapStateToProps)(TodoList);
