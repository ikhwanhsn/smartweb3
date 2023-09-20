import coomingSoon from '../../public/img/coomingsoon.png'
import Swal from 'sweetalert2'

const CardEbook = ({src, href}) => {
    return ( 
        <div className="relative rounded-sm shadow-sm hover:shadow-md hover:scale-[1.02] transition-all border group w-full h-full">
            {src && <a href={href} target='_blank'>
                <img src={src} alt="ebook"/>
            </a>}
            {!src && <img src={coomingSoon}     alt="ebook" onClick={() => Swal.fire(
            'Cooming Soon',
            'You can check it later...',
            'info'
            )}/>}
        </div>
     );
}
 
export default CardEbook;