import NavbarEbook from "../components/NavbarEbook";
import CardEbook from "../components/CardEbook";
import freeCrypto from "../../public/img/freeCrypto.png";
import faceless from "../../public/img/faceless.png";

const Ebook = () => {
  return (
    <div className="">
      <NavbarEbook />
      <div className="grid grid-cols-3 gap-3 m-3 md:grid-cols-5">
        <CardEbook src={freeCrypto} href={"https://t.me/SmartWeb3ID/5"} />
        <CardEbook
          src={faceless}
          href={"https://lynk.id/smartweb3.id/k6yOwP2"}
        />
        <CardEbook />
        <CardEbook />
        <CardEbook />
        <CardEbook />
      </div>
    </div>
  );
};

export default Ebook;
