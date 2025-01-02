import {Route, Routes} from "react-router-dom"
import {Home} from "../components/Home"

export const AppRoutes = () => {
  return <Routes>
    <Route index element={<Home/>} />
  </Routes>
}