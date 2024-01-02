import './styles.scss'
import { FaUserEdit,FaPlus,FaRegSadCry } from "react-icons/fa";
import { IoPersonRemoveSharp,IoOptions } from "react-icons/io5"
import { UserType } from '../../@types/UserType';

const dados : UserType[] = [

  {
    id: "1",
    name: "João",
    lastname: "Silva",
    fone: "(11) 9999-9999",
    email: "joao.silva@email.com",
    password: "123456",
  },
  {
    id:"2",
    name: "Maria",
    lastname: "Santos",
    fone: "(21) 8888-8888",
    email: "maria.santos@email.com",
    password: "789456",
  },
];

export default function Table(){


  return(
    <div className="container-table">
      {dados.length > 0 ? (
        <table className='responsive-table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Senha</th>
              <th><IoOptions size={40}/></th>
            </tr>
          </thead>
          <tbody>
              {dados.map((user)=>(
                <tr key={Number(user.id)}>
                  <td data-th="Nome">{`${user.name} ${user.lastname}`}</td>
                  <td data-th="Telefone">{user.fone}</td>
                  <td data-th="Email">{user.email}</td>
                  <td data-th="Senha">{user.password}</td>
                  <td data-th="⚙️" className='config'>
                    <button type="button" className='edit-user'><FaUserEdit/></button>
                    <button type="button" className='remove-user'><IoPersonRemoveSharp /></button>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      ):(
        <h3 className='dataEmpty'><span>Banco de dados sem cadastros</span> <FaRegSadCry/></h3>
      )}
    </div>
  )
}