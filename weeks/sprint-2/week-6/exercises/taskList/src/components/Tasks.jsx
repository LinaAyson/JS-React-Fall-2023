import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://week-7-backend.onrender.com/tasks"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setTasks(data);
        } else {
          console.error("Failed to fetch.");
        }
      } catch (error) {
        console.error("Error while fetching", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};
