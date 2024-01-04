import { IoIosCloseCircle } from "react-icons/io"
import { UserType } from "../../@types/UserType"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import './styles.scss'
import axios from "axios"

type modalType ={
  activedUserRemove: UserType | null,
  setActivedUserRemove: (user:UserType|null) => any
}



const ModalRemove = ({activedUserRemove,setActivedUserRemove}:modalType) => {
  const [name,setName] = useState("")


  const removeUserApi = async() => {
    const url = "https://api-register-users.onrender.com/user/"
    const id = activedUserRemove?._id

      try{
        await axios.delete(`${url}${id}`)

        toast.success("Usuário removido com sucesso, atualize a página")
      }catch(err){
        console.log("ERROR:",err);
        toast.warn("Erro ao tentar remover usuário.")
        
      }
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault()

    const nomeActivedUser = `${activedUserRemove?.name} ${activedUserRemove?.lastname}`

    if(name === ""){
      toast.warn("Digite o nome se deseja remover o usuário")
      return;
    }else if(name != nomeActivedUser){
      toast.warn("Nome incorreto")
      return;
    }else if(name == nomeActivedUser){
      removeUserApi()
      setActivedUserRemove(null)
      setName("");
      
    }
  }

  return (
    <>
      {activedUserRemove &&(
        <div className="container-model-form">
            <div className="container-form">
              <button className='close-modal' type='button' onClick={()=>setActivedUserRemove(null)}>
                <IoIosCloseCircle/>
              </button>
              <p>Tem certeza que deseja remover o usuário <strong>{activedUserRemove.name} {activedUserRemove.lastname}</strong>?, para confirmar digite o nome abaixo.</p>
              <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="nome..."
                onChange={(e)=>setName(e.target.value)}
                />
                <button type="submit">Remover</button>
              </form>
            </div>
        </div>
      )}
    </>
  )
}

export default ModalRemove