import { useForm } from "react-hook-form";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const TaskUpdate = () => {
  const axiosLocal = useAxiosLocal();
  const { title, _id, description, endDate, priority } = useLoaderData();
  console.log(title, _id, description, endDate, priority);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const taskInfo = {
      title: data.title,
      description: data.description,
      endDate: data.endDate,
      priority: data.priority,
    };

    axiosLocal
      .put(`/task_update/${_id}`, taskInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Task Updated Successfully");
          console.log(res.data);
          reset();
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="w-full  flex bg-cover bg-center">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            {/* image area */}
            <div className="text-center hidden md:flex lg:text-left w-1/2">
              <img
                className="w-full h-full mt-10"
                src="https://i.postimg.cc/525yWnD6/12325508-4952527.jpg"
                alt=""
              />
            </div>

            {/* form area */}
            <div className="card w-1/2  flex-shrink-0 shadow-md mt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="text-center text-2xl font-bold">Update Task</h2>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    defaultValue={title}
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="input input-bordered"
                  />
                  {errors.title && (
                    <span className="text-[#006ce1]">title is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    defaultValue={description}
                    type="text"
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="input input-bordered"
                  />
                  {errors.description && (
                    <span className="text-[#006ce1]">
                      Description is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">End Date </span>
                  </label>
                  <input
                    defaultValue={endDate}
                    className="py-3 rounded-lg px-1 border"
                    type="date"
                    {...register("endDate", { required: true })}
                  />
                  {errors.endDate && (
                    <span className="text-[#006ce1]">End Date Is Required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>

                  <select
                    defaultValue={priority}
                    className="border py-3 rounded-md"
                    {...register("priority", { required: true })}
                  >
                    <option disabled selected required>
                      Priority
                    </option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                  {errors.priority && (
                    <span className="text-[#006ce1]">Priority Is Required</span>
                  )}
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn bg-[#61adff] hover:bg-[#006ce1] text-white "
                  >
                    Update Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskUpdate;
