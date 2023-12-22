import { useDrop } from "react-dnd";
import { axiosLocal } from "../../hooks/useAxiosLocal";
import HeaderSide from "./HeaderSide";
import Task from "./Task";

const Section = ({ status, tasks, setTasks, todos, ongoing, completed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-[#61adffc7]";
  let tasksToMap = todos;

  if (status === "ongoing") {
    text = "Ongoing";
    bg = "bg-[#61adff]";
    tasksToMap = ongoing;
  }

  if (status === "completed") {
    text = "Completed";
    bg = "bg-[#006ce1]";
    tasksToMap = completed;
  }

  const addItemToSection = async (id) => {
    const response = await axiosLocal.patch(`/taskUpdate/${id}`, {
      status: status,
    });
    console.log(71, response.data);

    console.log(status);

    // update the local state if required
    setTasks((prev) => {
      const updatedTasks = prev.map((t) => {
        if (t._id === id) {
          return { ...t, status: status };
        }
        return t;
      });

      return updatedTasks;
    });
  };
  console.log(isOver);
  return (
    <div
      ref={drop}
      className={`w-full rounded-md p-3 ${isOver ? "bg-slate-200" : ""}`}
    >
      <HeaderSide text={text} bg={bg} />
      {tasksToMap?.length > 0 &&
        tasksToMap?.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};
export default Section;
