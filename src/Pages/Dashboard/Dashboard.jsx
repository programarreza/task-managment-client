import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BsClipboardPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TasksList from "../../components/TasksList/TasksList";
import useAuth from "../../hooks/useAuth";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosLocal = useAxiosLocal();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    axiosLocal
      .get(`/tasks/${user?.email}`)
      .then((result) => {
        console.log(result.data);
        setTasks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLocal, user?.email]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" md:px-10 xl:px-24 pt-16">
        <div className="flex justify-end">
          <Link to="/create_task">
            <button className="flex  items-center gap-1 border px-1.5 py-1 rounded-md bg-[#61adff] hover:bg-[#006ce1] text-white font-semibold">
              <BsClipboardPlusFill />
              Create Task
            </button>
          </Link>
        </div>

        <TasksList tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
};

export default Dashboard;
