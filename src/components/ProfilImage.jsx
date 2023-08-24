import profil from '../../public/img/profil.jpg'

const ProfilImage = () => {
    return ( 
        <div className="">
            <img src={profil} alt="" width={120} height={120} className='mx-auto transition-all rounded-full shadow-lg hover:scale-105 shadow-gray-200'/>
        </div>
     );
}
 
export default ProfilImage;