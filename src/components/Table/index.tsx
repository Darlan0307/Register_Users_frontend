import './styles.scss'
import { FaUserEdit,FaRegSadCry } from "react-icons/fa";
import { IoPersonRemoveSharp,IoOptions } from "react-icons/io5"
import { UserType } from '../../@types/UserType';
import { useEffect, useState } from 'react';

type dataType ={
  data: UserType[] | [],
  setActivedUser: (user:UserType|null) => any
}

export default function Table({data,setActivedUser}:dataType){

  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const idTime = setTimeout(()=>{
      setIsLoading(false)
    },3000)

    return () => clearTimeout(idTime)
  },[])

  return(
    <div className="container-table">
      {(data.length > 0 && isLoading == false) ? (
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
              {data.map((user:UserType,index)=>(
                <tr key={index}>
                  <td data-th="Nome">{`${user.name} ${user.lastname}`}</td>
                  <td data-th="Telefone">{user.fone}</td>
                  <td data-th="Email">{user.email}</td>
                  <td data-th="Senha">{user.password}</td>
                  <td data-th="⚙️" className='config'>
                    <button type="button" className='edit-user'
                      onClick={()=>setActivedUser(user)}
                    ><FaUserEdit/></button>
                    <button type="button" className='remove-user'><IoPersonRemoveSharp /></button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ):(
        <div className='container_loading'>
          <h3 className='dataEmpty'><span>Aguarde um momento por favor...</span> <FaRegSadCry/></h3>
          <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-text">Loading...</div>
          </div>
          
        </div>
      )}
    </div>
  )
}