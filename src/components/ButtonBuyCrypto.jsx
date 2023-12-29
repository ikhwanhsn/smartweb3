import { SiBinance } from "react-icons/si";
import { IoLogoBitcoin } from "react-icons/io";
import { FaRobot } from "react-icons/fa";

const ButtonBuyCrypto = () => {
    return ( 
        <div className="">
            {/* Open the modal using ID.showModal() method */}
            <button className="w-40 px-5 py-3 mt-3 text-blue-500 border-2 border-blue-500 rounded-full md:w-64 hover:text-white hover:bg-blue-500" onClick={()=>window.my_modal_4.showModal()}>💹Buy Crypto</button>
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="flex flex-col gap-3 modal-box">
                    <div className="flex items-center justify-center mb-1 text-2xl font-bold">
                        <h1 className="">Buy Crypto</h1>
                        <p className="animate-[wiggle_1s_ease-in-out_infinite]">🚀</p>
                    </div>
                    <a href="https://accounts.binance.info/register?ref=419294594" className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" target="_blank"><SiBinance className='mt-1 scale-125'/>Binance</a>
                    <a href="https://www.lbank.com/login/?icode=13IZ2" className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" target="_blank"><IoLogoBitcoin className='mt-1 scale-125'/>LBank</a>
                    <a href="https://t.me/Kedai_CryptoBot?start=r963912641" className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" target="_blank"><FaRobot className='mt-1 scale-125'/>Bot Telegram</a>
                </form>
                <form method="dialog" className="modal-backdrop">
                <button>close</button>
                </form>
            </dialog>
        </div>
     );
}
 
export default ButtonBuyCrypto;