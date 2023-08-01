import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ task, toggleComplete, deleteTodo }) {
  return (
    <>
      {task?.task === "" ? (
        console.log(task?.task)
      ) : (
        <div className="todo-container text-gray-700 text-center mt-2">
          <div className="flex justify-between shadow mb-2">
            <span
              className={`w-full text-left leading-loose p-2 pl-10 cursor-pointer ${
                task?.complete ? "line-through" : ""
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task?.task}
            </span>
            <div className="flex items-center ">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="mx-4"
                onClick={() => editTodo(task?.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="mx-4"
                onClick={() => deleteTodo(task?.id)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
