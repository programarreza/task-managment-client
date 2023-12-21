import axios from "axios";
import { axiosLocal } from "../hooks/useAxiosLocal";


// image upload
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data;
};

// save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
  };
  const { data } = await axiosLocal.put(`/users/${user?.email}`, currentUser);
  return data;
};