
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <div className="absolute top-0 z-[-2] h-fit w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Navbar />

      <Manager />
      <Footer />
      </div>
    </>)
}

export default App
