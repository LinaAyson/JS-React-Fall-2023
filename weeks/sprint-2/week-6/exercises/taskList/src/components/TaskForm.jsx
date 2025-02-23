const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to todo app! Type new task below.</h1>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Submit form!</button>
    </form>
  );
};

export default TaskForm;
import { useState } from "react";
export const TaskForm = () => {
  const [addTask, setAddTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://week-7-backend.onrender.com/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ addTask }),
        }
      );

      if (!response.ok) {
        console.error("Failed to add task");
        return;
      }
      setAddTask("");
    } catch (error) {
      console.error("Error while adding task", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={addTask}
          placeholder="Enter a new task"
          onChange={(e) => setAddTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
