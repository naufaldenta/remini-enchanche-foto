import { useHomepageContext } from "./context";
import useFiles from "./hooks/useFiles";

function Homepage() {
  const { state } = useHomepageContext();
  const { handleFileChange, handleSubmitFile, downloadImage } = useFiles();

  return (
    <div className="p-10 px-32">
      <div className="border shadow-md flex flex-col px-8 py-6 pb-4">
        <span className="text-3xl font-semibold">Remini by Naufal Denta</span>
        <span className="mt-1 text-gray-700">HD images using AI</span>
        <hr className="my-4" />
        <div className="flex flex-col">
          <span className="font-semibold">Upload Image</span>
          <input
            type="file"
            className="mt-3 py-4 px-6 rounded-md border border-gray-300 bg-gray-200/50"
            onChange={handleFileChange}
          />
          <button
            onClick={handleSubmitFile}
            className="w-fit mt-4 py-2 px-4 rounded-md bg-blue-500 text-white font-semibold"
          >
            Enhance!
          </button>
        </div>
        <div className="my-4 flex flex-col">
          <span className="mb-1">Result:</span>
          {state.isLoading ? <span>Loading...</span> : null}
          {state.resultURL ? (
            <div>
              <img src={state.resultURL} />
              <button
                onClick={downloadImage}
                className="mt-4 py-2 px-4 rounded-md bg-blue-500 text-white font-semibold"
              >
                Download
              </button>
            </div>
          ) : "-"}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
