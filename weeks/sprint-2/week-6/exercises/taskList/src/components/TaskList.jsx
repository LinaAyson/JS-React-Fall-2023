import "./TaskList.css";

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
