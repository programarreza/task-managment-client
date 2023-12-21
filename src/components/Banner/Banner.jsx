import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('https://i.postimg.cc/FHDDP7MY/best-project-management-app.png')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-40 ">
            <div className="ml-12">
              <Link to="/login">
                <button className="btn text-center w-fit mx-auto  bg-[#006de1e5] hover:bg-[#0060ec] text-white ">
                  Let’s Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
