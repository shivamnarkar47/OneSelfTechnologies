import { Link, Outlet, useNavigation } from "react-router-dom"
import { ModeToggle } from "./components/mode-toggle"
import Footer from "./components/Footer"
import GlobalSpinner from "./components/GlobalSpinner";
import Navbar from "./components/Navbar";

function App() {

  const navigation = useNavigation();
  return (
    <div className="lg:min-h-screen h-full">

      {navigation.state === "loading" && <GlobalSpinner />}
  
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
