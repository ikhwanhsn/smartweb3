import NavbarEbook from "../components/NavbarEbook";
import CardEbook from "../components/CardEbook";
import freeCrypto from '../../public/img/freeCrypto.png'

const Ebook = () => {
    return ( 
        <div className="">
            <NavbarEbook/>
            <div className="grid grid-cols-3 gap-3 m-3">
                <CardEbook src={freeCrypto} href={'https://t.me/smartweb3_id/55'}/>
                <CardEbook/>
                <CardEbook/>
                <CardEbook/>
                <CardEbook/>
                <CardEbook/>
            </div>
        </div>
     );
}
 
export default Ebook;