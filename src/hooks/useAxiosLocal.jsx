import axios from "axios";

export const axiosLocal = axios.create({
  baseURL: "https://task-management-server-rho-nine.vercel.app",
});
const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;