import { saveAs } from "file-saver";
import { upload } from "../../../services/remini";
import { useHomepageContext } from "../context";

const useFiles = () => {
  const { state, setState } = useHomepageContext();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setState((prevState) => ({
        ...prevState,
        file,
      }));
    }
  };

  const handleSubmitFile = async () => {
    if (!state?.file) {
      alert("Please select a file to enhance");
      return;
    }
    setState((prevState) => ({
      ...prevState,
      resultURL: "",
      isLoading: true,
    }));

    const res = await upload(state.file);
    if (res.error) {
      alert(res.error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      resultURL: res.result,
      isLoading: false,
    }));
  };

  const downloadImage = async () => {
    const imageId = state.resultURL.split("file/")[1];
    saveAs(
      `${import.meta.env.VITE_BACKEND_URL}/api/download?imageId=${imageId}`,
      state.file.name + ".png"
    );
  };

  return { handleFileChange, handleSubmitFile, downloadImage };
};

export default useFiles;
