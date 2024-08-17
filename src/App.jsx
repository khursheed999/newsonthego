
import './App.css'
import { Store } from './Components/ContextStore/ContextStore'
import NavBar from './Components/Header/NavBar'
import NewsBoard from './Components/UI/NewsBoard'
import Footer from './Footer/Footer'
function App() {
  

  return (
   <Store>
    <NavBar/>
    <NewsBoard/>
    <Footer/>
   </Store>
  )
}

export default App
