import Button from "./components/Button";
import ButtonForBusiness from "./components/ButtonForBusiness";
import Footer from "./components/Footer";
import ProfilDesc from "./components/ProfilDesc";
import ProfilImage from "./components/ProfilImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ButtonBuyCrypto from "./components/ButtonBuyCrypto";
import ButtonCourse from "./components/ButtonCourse";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center ">
      <ProfilImage />
      <ProfilDesc />
      <Button
        href={"https://t.me/SmartWeb3ID"}
        style={
          "w-40 md:w-64 px-5 py-3 mt-3 text-white bg-blue-500 rounded-full hover:bg-blue-600"
        }
      >
        Telegram Group
      </Button>
      <ButtonCourse />
      {/* <button 
      onClick={() => Swal.fire(
        'Cooming Soon',
        'You can check it later...',
        'info'
      )} 
      className="w-40 px-5 py-3 mt-3 text-blue-500 border-2 border-blue-500 rounded-full hover:text-white hover:bg-blue-500"
      >📖Free Ebookk</button> */}
      <ButtonBuyCrypto />
      <button
        onClick={() => navigate("/ebook")}
        className="w-40 px-5 py-3 mt-3 text-blue-500 border-2 border-blue-500 rounded-full md:w-64 hover:text-white hover:bg-blue-500"
      >
        📖Free Ebook
      </button>
      <ButtonForBusiness />
      <Footer />
    </div>
  );
}

export default App;
