import { useNavigate } from 'react-router-dom';
import './styles.scss'
import { FaUserPlus,FaUserCog } from "react-icons/fa";

export default function Home(){

  const navigate = useNavigate()

  return(
    <div className="home_page">
      <div className='card'>
      <div className='option'
      onClick={()=>navigate("/userform")}
      >
        <FaUserPlus/>
        <span>Adicionar Usuário</span>
      </div>
      <p>Cadastrar novos usuários usando uma <strong>api</strong> que se conecta a um banco de dados online(mongodb).</p>
      </div>
      
      <div className='card'>
      <div className='option'
      onClick={()=>navigate("/gerenciamento")}
      >
        <FaUserCog/>
        <span>Gerenciar Usuários</span>
      </div>
      <p>Vizualisar,editar e remover usuários do banco de dados.</p>
      </div>
      
    </div>
  )
}