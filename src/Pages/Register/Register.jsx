import { useForm } from "react-hook-form";
import { imageUpload } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosLocal = useAxiosLocal();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    console.log(image);

    const imageData = await imageUpload(image);
    console.log(imageData);

    // user registration with firebase
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      // profile update
      updateUserProfile(data.name, imageData?.data?.display_url)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            image: imageData?.data?.display_url,
          };
          axiosLocal.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("Registration Successful");
              reset();
              //   navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error);
        });
    });
  };

  return (
    <div>
      <div className="w-full min-h-screen flex bg-cover bg-center">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            <div
              className="text-center hidden md:flex lg:text-left w-1/2"
              data-aos="fade-right"
            >
              <img
                className="w-full  h-[80vh]"
                src="https://i.postimg.cc/FHStM2cQ/login-img02.png"
                alt=""
              />
            </div>
            <div
              className="card w-1/1  flex-shrink-0 shadow-2xl"
              data-aos="fade-left"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-[350px]"
              >
                <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#006ce1]">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-[#006ce1]">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      // TODO: uncomment this validation
                      // pattern:
                      //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#006ce1]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#006ce1]">
                      Password must be 6 Character
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#006ce1]">
                      Password must be less den 20 Character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#006ce1]">
                      Password must have one upper case one lower carse, one
                      number and one special character
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Upload Profile Image:
                  </label>
                  <input
                    {...register("image", { required: true })}
                    required
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                  
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn   bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    Sign Up
                  </button>
                  <p className="text-[#006ce1] text-center mt-2">
                    Already registered?{" "}
                    <Link to={"/login"}>
                      <span className="font-semibold">login Now</span>
                    </Link>
                  </p>
                  <div className="divider">or</div>
                </div>
                <div>
                  <SocialLogin />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
