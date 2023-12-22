import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CreateTask from "../Pages/CreateTask/CreateTask";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TaskUpdate from "../Pages/TaskUpdate/TaskUpdate";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "create_task",
        element: <CreateTask />,
      },
      {
        path: "task_update/:id",
        element: <TaskUpdate/>,
        loader: ({params}) => fetch(`http://localhost:5000/tasks_update/${params.id}`)
      }
    ],
  },
]);

export default Router;
