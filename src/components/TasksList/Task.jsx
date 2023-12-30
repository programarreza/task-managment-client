import { useDrag } from "react-dnd";
import { axiosLocal } from "../../hooks/useAxiosLocal";
import toast from "react-hot-toast";
import { MdFolderDelete } from "react-icons/md";
import { BiMessageAltEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);

  const handleDelete = (id) => {
    console.log(id);
    axiosLocal
      .delete(`/tasks/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success("Task Removed successfully ");
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      ref={drag}
      className={`cursor-grab shadow-md p-4 rounded-md ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      <div className="flex justify-between">
        <div className="font-medium text-gray-500">
          <p className="text-2xl font-semibold mb-2">{task.title}</p>
          <p className="text-sm">{task.description}</p>
          <p className="text-sm">{task.endDate}</p>
          <p className="text-sm shadow-lg w-fit ">{task.priority}</p>
        </div>

        <div className="flex flex-col gap-6">
          <button onClick={() => handleDelete(task?._id)}>
            <MdFolderDelete size={25} />
          </button>

          <Link to={`/task_update/${task?._id}`}>
            <button>
              <BiMessageAltEdit size={25} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
