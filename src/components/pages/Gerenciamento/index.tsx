import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

export default function Gerenciamento() {

const navigate = useNavigate()

  return (
    <div className='gerenciamento_page'>
      <div className="back-btn" onClick={()=>navigate("/")}>
        <FaArrowAltCircleLeft/>
      </div>
      <h2>Gerenciamento</h2>
    </div>
  )
}
