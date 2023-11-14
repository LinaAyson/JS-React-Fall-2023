import { useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export const Tasks = () => {
=======
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export const Tasks = () => {
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const url = "https://week-7-backend.onrender.com/tasks";

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTaskList(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      /*      This block is executed no matter what, whether there was an error or not. 
      It's typically used for cleanup tasks. In this case, it sets the loading state back to false, 
      indicating that the loading operation has finished.
      */
      setLoading(false);
    }
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    // The provided code defines an options object used for configuring and customizing an HTTP request, specifically a POST request.

    const options = {
      method: "POST",
      // Headers provide additional information about the request, such as the data format.
      headers: {
        "Content-Type": "application/json",
      },

      // This property contains the data that will be sent with the request. In this specific case, it's sending an object with a description field
      body: JSON.stringify({
        description: newTodo,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        await fetchTasks();
      }
    } catch (error) {
      console.error(error);
    } finally {
      // cleanup function, setNewToDo string as empty
      // preventing any unintended data from lingering in the variable.
      setNewTodo("");
    }
  };

  useEffect(() => {
<<<<<<< HEAD
>>>>>>> 18bd09d69b91a0ba75233bde499561ff168da476
=======
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d
    fetchTasks();
  }, []);

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <TaskForm />
      <TaskList tasks={tasks} />
=======
=======
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
      />
<<<<<<< HEAD
>>>>>>> 18bd09d69b91a0ba75233bde499561ff168da476
=======
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d
    </div>
  );
};
