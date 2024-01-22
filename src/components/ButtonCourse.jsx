import Button from "./Button";

const ButtonCourse = () => {
  return (
    <section>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="w-40 px-5 py-3 mt-3 text-blue-500 normal-case border-2 border-blue-500 rounded-full md:w-64 hover:text-white hover:bg-blue-500"
      >
        📚Course
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Mastering Dex</h3>
          <section className="w-full px-1 mt-2 bg-black border-2 border-black rounded-md shadow-md md:px-0 md:border-4">
            <iframe
              src="https://drive.google.com/file/d/1fihxMDb49b64n3ppMe8d1AKj2AegAY_A/preview"
              width="640"
              height="480"
              allow="autoplay"
              className="w-full h-44 md:h-64"
            ></iframe>
          </section>
          <Button
            href={"https://lynk.id/smartweb3.id/vv8X8wJ"}
            style={
              "w-64 px-5 py-3 mt-3 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            }
          >
            Buy Course{" "}
            <span className="font-bold text-red-600 line-through">$50</span>{" "}
            <span className="font-bold text-green-400">$37</span>
          </Button>
        </div>
      </dialog>
    </section>
  );
};

export default ButtonCourse;
