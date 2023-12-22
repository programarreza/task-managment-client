import { useEffect, useState } from "react";
import Section from "./Section";


const TasksList = ({ tasks, setTasks }) => {
  console.log(tasks);
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task.status === "todo");
    const fOngoing = tasks?.filter((task) => task.status === "ongoing");
    const fCompleted = tasks?.filter((task) => task.status === "completed");

    setTodos(fTodos);
    setOngoing(fOngoing);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "ongoing", "completed"];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
      {statuses.map((status, i) => (
        <Section
          key={i}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          ongoing={ongoing}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default TasksList;

