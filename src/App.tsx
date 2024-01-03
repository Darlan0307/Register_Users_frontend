import ContainerPages from "./components/ContainerPages"
import './App.scss'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {

  return (
    <div className="app">
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <h1>Sistema de cadastro</h1>
      <ContainerPages/>
    </div>
  )
}

export default App
