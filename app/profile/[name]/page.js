"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../../../components/Todo";
import EditTodoForm from "@/components/EditTodoForm";

uuidv4();

export default function Name({ params }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = async (todo) => {
    await setTodos((todos) => [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(newTodo);
    handleAdd(newTodo);
    setNewTodo("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="block w-full text-center text-gray-900 mb-6 mt-6">
          Get things done{" "}
          {params.name.replace(/^./, params.name[0].toUpperCase())}
        </h1>
        <div className="flex p-4">
          <span className="flex-1 text-center text-teal-900">
            Item count: <span id="item-count">0</span>
          </span>
          <span className="flex-1 text-center text-teal-900">
            Unchecked count: <span id="unchecked-count">0</span>
          </span>
        </div>
        <div className="flex shadow bg-white p-2">
          <input
            id="todo-input"
            className="w-full rounded text-gray-700 p-2"
            type="text"
            placeholder="Title..."
            maxlength="50"
            required
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-400 rounded text-white p-2 pl-5 pr-5 cursor-pointer"
          >
            <span className="font-semibold text-teal-100 text-sm cursor-pointer">
              Add
            </span>
          </div>
        </div>
        {todos?.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          )
        )}
        <Todo />
      </div>
    </>
  );
}
