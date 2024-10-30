import axios from "axios";

export const upload = async (image) => {
  try {
    const baseURL = import.meta.env.VITE_BACKEND_URL + "/api/upload";

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(baseURL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
