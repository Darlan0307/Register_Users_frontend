import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import UserForm from "../pages/UserForm"
import Gerenciamento from "../pages/Gerenciamento"

const ContainerPages = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userform" element={<UserForm/>}/>
        <Route path="/gerenciamento" element={<Gerenciamento/>}/>
      </Routes>
    </main>
  )
}

export default ContainerPages