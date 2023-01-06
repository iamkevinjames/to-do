import React, { useState } from "react";
import Card from "../components/Card";
import "./application.css";

function MyToDo() {
  const [myTodos, setMyTodos] = useState([
    {
      name: "Personal Care",
      id: "personalCare",
      createdDate: "02 Jan, 2023",
      tasks: ["Take bath", "Dress up", "Comb hair"],
    },
    {
      name: "Shopping",
      id: "shopping",
      createdDate: "02 Jan, 2023",
      tasks: ["Soap", "Comb", "Food"],
    },
    {
      name: "Work",
      id: "work",
      createdDate: "02 Jan, 2023",
      tasks: ["login", "complete task", "logout"],
    },
  ]);

  const addTodo = () => {
    setMyTodos((prev) => {
      return [...prev, { name: "New", id: "new", createdDate: "06 Jan, 2023" }];
    });
  };

  return (
    <div className="to-do-container">
      <h1 className="top-bar"> MY TODO</h1>
      <div className="todos">
        {myTodos.map((todo) => {
          return (
            <Card className="todo" key={todo.id}>
              <div className="todoTitle">{todo.name}</div>
              <div className="todoCreatedDate">{todo.createdDate}</div>
              <div className="todoTasks">
                {todo.tasks.map((task) => {
                  return (
                    <div className="tasks">
                      <input className="taskCheckbox" type="checkbox" />
                      <label className="taskLabel">{task}</label>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
        <Card className="todo">
          <div className="addTodo" onClick={addTodo}>
            +
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MyToDo;
