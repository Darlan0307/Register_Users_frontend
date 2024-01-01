import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import Table from '../../Table'

export default function Gerenciamento() {

const navigate = useNavigate()

  return (
    <div className='gerenciamento_page'>
      <div className="back-btn" onClick={()=>navigate("/")}>
        <FaArrowAltCircleLeft/>
      </div>
      <h2>Gerenciamento dos Usuários</h2>
      <Table/>
    </div>
  )
}
