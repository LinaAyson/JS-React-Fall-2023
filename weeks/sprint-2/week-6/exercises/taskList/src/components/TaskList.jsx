<<<<<<< HEAD
<<<<<<< HEAD
import "./TaskList.css";
=======
import { formatRelative } from "date-fns";
import "./Tasks.css";
=======
import { formatRelative } from "date-fns";
import "./Tasks.css";

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  const onTaskCheckChange = (task) => {
    // update a state object
    /* updatedTask is a new object that is the same as the task object except for the isChecked property, 
    which is toggled from true to false or from false to true. 
    This code is often used to update a property of an object while preserving the rest of its properties. */
    const updatedTask = { ...task, isChecked: !task.isChecked };

    // Make a POST request here with the updated task isChecked value
    fetch(`https://week-7-backend.onrender.com/tasks/${task._id}/check`, {
      method: "POST",
      headers: { updatedTask, "Content-Type": "application/json" },
      body: JSON.stringify({
        isChecked: updatedTask.isChecked,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        // Handle network or other errors
      });

    // Update the task list in the state
    // Use .map to update the specific task if found, otherwise return it unchanged
    setTaskList((taskList) =>
      taskList.map((singleTask) =>
        singleTask._id === task._id ? updatedTask : singleTask
      )
    );
  };

  return (
    <section>
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={() => onTaskCheckChange(task)}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>
            <p>{formatRelative(task.date, new Date())}</p>
          </div>
        ))
        .reverse()
        .slice(0, 20)}
    </section>
  );
};
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  const onTaskCheckChange = (task) => {
    // update a state object
    /* updatedTask is a new object that is the same as the task object except for the isChecked property, 
    which is toggled from true to false or from false to true. 
    This code is often used to update a property of an object while preserving the rest of its properties. */
    const updatedTask = { ...task, isChecked: !task.isChecked };

    // Make a POST request here with the updated task isChecked value
    fetch(`https://week-7-backend.onrender.com/tasks/${task._id}/check`, {
      method: "POST",
      headers: { updatedTask, "Content-Type": "application/json" },
      body: JSON.stringify({
        isChecked: updatedTask.isChecked,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        // Handle network or other errors
      });

    // Update the task list in the state
    // Use .map to update the specific task if found, otherwise return it unchanged
    setTaskList((taskList) =>
      taskList.map((singleTask) =>
        singleTask._id === task._id ? updatedTask : singleTask
      )
    );
  };

  return (
    <section>
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={() => onTaskCheckChange(task)}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>
            <p>{formatRelative(task.date, new Date())}</p>
          </div>
        ))
        .reverse()
        .slice(0, 20)}
    </section>
  );
};
>>>>>>> 18bd09d69b91a0ba75233bde499561ff168da476

export const TaskList = ({ tasks }) => {


  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="cardTask">
            <p>{task.description}</p>
            <p>Date: {task.date}</p>
            <p>Checked: {task.isChecked ? "Yes" : "No"}</p>
          </div>
        ))}
    </div>
  );
};
