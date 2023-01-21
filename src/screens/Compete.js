import React, { useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import { MdDeleteForever } from "react-icons/md";
import TextBox from "./../components/TextBox";
import Button from "./../components/Button";
import Timer from "./../components/Timer";

function Compete() {
  const [isValid, setIsValid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isStriked, setIsStriked] = useState({});
  const [addedTodo, updateAddedTodo] = useState();
  const [player1Details, updatePlayer1Details] = useState({
    name: "John Hughes",
    todos: ["Workout", "Office", "Play", "Music", "Books"],
  });
  const player2Details = {
    name: "Phil Morgan",
    todos: ["Workout", "Office", "Play", "Music", "Books"],
  };

  const removeTodo = (which) => {
    updatePlayer1Details((prev) => {
      return {
        ...prev,
        todos: player1Details.todos.filter((todo) => todo !== which),
      };
    });
  };

  const addTodo = (what) => {
    if (what && what.length > 0) {
      const tempTodoList = [...player1Details.todos];
      if (
        !tempTodoList.find((todo) => todo.toLowerCase() === what.toLowerCase())
      ) {
        tempTodoList.push(what);
        updatePlayer1Details((prev) => {
          return { ...prev, todos: tempTodoList };
        });

        updateAddedTodo("");
      } else {
        setIsValid(false);
        updateAddedTodo("");
      }
    }
  };

  const handleChange = (event) => {
    setIsValid(true);
    updateAddedTodo(() => event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      setIsStriked(() => {
        return { ...isStriked, [event.target.id]: { strike: true } };
      });
    } else {
      setIsStriked(() => {
        return { ...isStriked, [event.target.id]: { strike: false } };
      });
    }
  };

  const addOrRemoveTodo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="compete-container">
      <div className="compete-player player1">
        <Card className="compete-player-card">
          <Title>{player1Details.name}</Title>
          <div>Created on {new Date().toLocaleDateString()}</div>
          <Timer endTime="24" />
          {player1Details.todos &&
            player1Details.todos.length > 0 &&
            player1Details.todos.map((todo) => {
              return (
                <div className="compete-todo" key={todo}>
                  <input
                    type="checkbox"
                    id={todo}
                    onChange={handleCheckBoxChange}
                  />
                  <label
                    className={`compete-todo-label ${
                      isStriked &&
                      isStriked[todo] &&
                      isStriked[todo].strike === true
                        ? "strike-todo"
                        : ""
                    }`}
                    htmlFor={todo}
                  >
                    {todo}
                  </label>
                  <MdDeleteForever onClick={() => removeTodo(todo)} />
                </div>
              );
            })}

          {isOpen && (
            <>
              <TextBox
                className={isValid ? "" : "error-textbox"}
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    addTodo(addedTodo);
                  }
                }}
                value={addedTodo}
              />

              {!isValid && (
                <div style={{ fontSize: "0.7em", color: "#ff2255" }}>
                  Please enter different todo
                </div>
              )}
              <Button value="Add Todo" onClick={() => addTodo(addedTodo)} />
            </>
          )}

          <div>
            <Button
              value={isOpen ? "Cancel   " : "Add Todo"}
              onClick={addOrRemoveTodo}
            />
          </div>
        </Card>
      </div>
      <div className="compete-player player2">
        <Card className="compete-player-card">
          <Title>{player2Details.name}</Title>
          <div>Created on {new Date().toLocaleDateString()}</div>
          <Timer endTime="24" />
          {player2Details.todos &&
            player2Details.todos.length > 0 &&
            player2Details.todos.map((todo) => {
              return (
                <div className="compete-todo" key={todo}>
                  <input type="checkbox" id={todo} disabled />
                  <label className="compete-todo-label" htmlFor={todo}>
                    {todo}
                  </label>
                </div>
              );
            })}
        </Card>
      </div>
    </div>
  );
}

export default Compete;
