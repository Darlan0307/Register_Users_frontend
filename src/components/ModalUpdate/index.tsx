import './styles.scss'
import { IoIosCloseCircle } from "react-icons/io";
import { UserType } from '../../@types/UserType'
import { FormEvent, useState } from 'react';
import { Validate } from '../../utils/Validate';
import { toast } from 'react-toastify';
import axios from 'axios';

type modelType = {
  activedUserUpdate:UserType | null,
  setActivedUserUpdate: (user:UserType|null) => any,
}

const ModalUpdate = ({activedUserUpdate,setActivedUserUpdate}:modelType) => {
  const url = "https://api-register-users.onrender.com/user/"
  const [erros,setErros] = useState<UserType | null>(null)

  const handleValueUser = (key?:string,value?:string) =>{

    setActivedUserUpdate({
    ...activedUserUpdate,[key as keyof UserType]: value
  })
  
}

async function updateUserApi(user:UserType) {
  const {_id,name,lastname,fone,email,password} = user

  try{
    await axios.put(`${url}${_id}`,{
      name, lastname, fone, email, password
    })
    toast.success(`Usuário ${name} atualizado com sucesso!`)
  }catch(err){
    console.log('ERROR:',err)
    toast.warn("Erro ao tentar atualizar usuário")
  }
}

const handleSubmit = (event:FormEvent) =>{
  event.preventDefault();
  setErros(null)

  const userData:UserType = {
    _id:activedUserUpdate?._id,
    name:activedUserUpdate?.name,
    lastname:activedUserUpdate?.lastname,
    fone:activedUserUpdate?.fone,
    email:activedUserUpdate?.email,
    password:activedUserUpdate?.password
  }
  
  const objErros = Validate(userData)

  if(Object.keys(objErros).length > 0){
    setErros(objErros)
    toast.warn("Preencha todos os campos corretamente")
    return;
  }

  updateUserApi(userData)
  setActivedUserUpdate(null)
}


  return (
    <>
      {activedUserUpdate && (
        <div className='container-model-form'>
          <div className='model-form'>
            <button className='close-modal' type='button' onClick={()=>setActivedUserUpdate(null)}>
              <IoIosCloseCircle/>
            </button>
            <h2>Atualizando os dados de {activedUserUpdate.name}</h2>
            <form className='form' onSubmit={handleSubmit}>
              <div>
                <input type="text" value={`${activedUserUpdate.name}`}
                onChange={(e)=>handleValueUser("name",e.target.value)}
                />
                {erros?.name && (
                  <small className='input-error'>{erros.name}</small>
                )}
              </div>
              <div>
                <input type="text" value={`${activedUserUpdate.lastname}`} 
                onChange={(e)=>handleValueUser("lastname",e.target.value)}
                />
                {erros?.lastname && (
                  <small className='input-error'>{erros.lastname}</small>
                )}
              </div>
              <div>
                <input type="tel" value={`${activedUserUpdate.fone}`} 
                onChange={(e)=>handleValueUser("fone",e.target.value)}
                />
                {erros?.fone && (
                  <small className='input-error'>{erros.fone}</small>
                )}
              </div>
              <div>
                <input type="email" value={`${activedUserUpdate.email}`} 
                onChange={(e)=>handleValueUser("email",e.target.value)}
                />
                {erros?.email && (
                  <small className='input-error'>{erros.email}</small>
                )}
              </div>
              <div>
                <input type="text" value={`${activedUserUpdate.password}`} 
                onChange={(e)=>handleValueUser("password",e.target.value)}
                />
                {erros?.password && (
                  <small className='input-error'>{erros.password}</small>
                )}
              </div>
              <button type='submit'>Atualizar</button>
            </form>
        </div>
      </div>
      )}
    </>
  )
}

export default ModalUpdate