import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log("add");
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isCompleted: false },
    ]);
  };

  return { addTodo, todos };
};

export default useTodo;
