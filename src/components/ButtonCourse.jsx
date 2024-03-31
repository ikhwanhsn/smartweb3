import Button from "./Button";

const ButtonCourse = () => {
  return (
    <section>
      <button
        onClick={() => document.getElementById("my_modal_11").showModal()}
        className="w-40 px-5 py-3 mt-3 text-blue-500 normal-case border-2 border-blue-500 rounded-full md:w-64 hover:text-white hover:bg-blue-500"
      >
        📚Course
      </button>
      <dialog id="my_modal_11" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Mastering Dex</h3>
          <section className="w-full px-0 mt-2 bg-black border-2 border-black rounded-md shadow-md md:border-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0YR0WsLWKXM?si=Wmk9i6FAJnEFyeB9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full h-44 md:h-64"
            ></iframe>
          </section>
          <Button
            href={"https://sites.google.com/view/mastering-dex/halaman-muka"}
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
