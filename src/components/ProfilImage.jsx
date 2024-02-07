import profil from "../../public/img/profil.jpg";
import logo from "../../public/img/logo.jpeg";

const ProfilImage = () => {
  return (
    <div className="">
      <img
        src={logo}
        alt=""
        width={120}
        height={120}
        className="mx-auto transition-all rounded-full shadow-lg hover:scale-105 shadow-gray-200"
      />
    </div>
  );
};

export default ProfilImage;
