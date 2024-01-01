import './styles.scss'
import { FaUserEdit,FaPlus,FaRegSadCry } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5"
import { UserType } from '../../@types/UserType';

// type Data = {
//   dados: UserType
// }


const dados : UserType[] = [

  // {
  //   id: "1",
  //   name: "João",
  //   lastname: "Silva",
  //   fone: "(11) 9999-9999",
  //   email: "joao.silva@email.com",
  //   password: "123456",
  // },
  // {
  //   id:"2",
  //   name: "Maria",
  //   lastname: "Santos",
  //   fone: "(21) 8888-8888",
  //   email: "maria.santos@email.com",
  //   password: "789456",
  // },
];

export default function Table(){


  return(
    <div className="responsive-table">
      {dados.length > 0 ? (
        <>
        {dados.map((user) => (
          <article key={Number(user.id)} className='card_user'>
            <h3>
              <span>ID User:</span> {user.id}
            </h3>
            <div className='info_user'>
              <p><span>Nome:</span> {`${user.name} ${user.lastname}`}</p>
              <div className='config'>
                <button className='plus-info'> <FaPlus/> <span>Informação</span></button>
                <button className='edit-user'>
                  <FaUserEdit/>
                </button>
                <button className='remove-user'>
                  <IoPersonRemoveSharp/>
                </button>
              </div>
            </div>
          </article>
        ))}
        </>
      ):(
        <h3 className='dataEmpty'><span>Banco de dados sem cadastros</span> <FaRegSadCry/></h3>
      )}
    </div>
  )
}