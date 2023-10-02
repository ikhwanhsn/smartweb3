import { useNavigate } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'

const NavbarEbook = () => {
    const navigate = useNavigate()

    return ( 
        <div className="flex items-center gap-3 px-5 py-3 text-white bg-blue-500">
            <IoIosArrowBack className="mt-1 scale-150 cursor-pointer" onClick={() => navigate('/')}/>
            <h1 className="text-xl font-bold">Ebook Collection</h1>
        </div>
     );
}
 
export default NavbarEbook;