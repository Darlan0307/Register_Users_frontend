import { useNavigate } from 'react-router-dom';
import './styles.scss'
import { FaUserPlus,FaUserCog } from "react-icons/fa";

export default function Home(){

  const navigate = useNavigate()

  return(
    <div className="home_page">
      <div className='option'
      onClick={()=>navigate("/userform")}
      >
        <FaUserPlus/>
        <span>Adicionar Usuário</span>
      </div>
      <div className='option'
      onClick={()=>navigate("/gerenciamento")}
      >
        <FaUserCog/>
        <span>Gerenciar Usuários</span>
      </div>
    </div>
  )
}