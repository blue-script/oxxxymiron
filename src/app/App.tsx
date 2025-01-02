import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {AppRoutes} from "./AppRoutes"
import '../styles/index.scss'

function App() {

  return (
    <div className={"app"}>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
