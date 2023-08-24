import Button from "./components/Button"
import ButtonForBusiness from "./components/ButtonForBusiness"
import Footer from "./components/Footer"
import ProfilDesc from "./components/ProfilDesc"
import ProfilImage from "./components/ProfilImage"

function App() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center">
      <ProfilImage/>
      <ProfilDesc/>
      <Button href={'/'} style={'w-40 px-5 py-3 mt-3 text-white bg-blue-500 rounded-full hover:bg-blue-600'}>Telegram Group</Button>
      <Button style={'w-40 px-5 py-3 mt-3 text-blue-500 hover:text-white border-2 border-blue-500 hover:bg-blue-500 rounded-full'}>Ebook Gratis</Button>
      <ButtonForBusiness/>
      <Footer/>
    </div>
  )
}

export default App
