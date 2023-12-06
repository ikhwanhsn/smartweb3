import {FaTelegram} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const ButtonForBusiness = () => {
    return ( 
        <div className="">
            {/* Open the modal using ID.showModal() method */}
            <button className="w-40 px-5 py-3 mt-3 text-blue-500 border-2 border-blue-500 rounded-full md:w-64 hover:text-white hover:bg-blue-500" onClick={()=>window.my_modal_3.showModal()}>☎️For Business</button>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="flex flex-col gap-3 modal-box">
                    <div className="flex items-center justify-center mb-1 text-2xl font-bold">
                        <h1 className="">Let's Collab with Me</h1>
                        <p className="animate-[wiggle_1s_ease-in-out_infinite]">✌️</p>
                    </div>
                    <a href="https://t.me/ikhwanhsn" className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" target="_blank"><FaTelegram className='mt-1 scale-125'/>Telegram</a>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=smartweb3.id@gmail.com" className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" target="_blank"><MdEmail className='mt-1 scale-125'/>Email</a>
                </form>
                <form method="dialog" className="modal-backdrop">
                <button>close</button>
                </form>
            </dialog>
        </div>
     );
}
 
export default ButtonForBusiness;