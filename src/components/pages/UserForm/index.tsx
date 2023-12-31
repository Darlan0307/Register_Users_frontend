import { FaArrowAltCircleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import './styles.scss'
import { UserType } from "../../../@types/UserType"
import { Validate } from "../../../utils/Validate"
import { FormEvent, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";

export default function UserForm() {

  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [fone,setFone] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [erros,setErros] = useState<UserType | null>(null)

  const navigate = useNavigate()

  const sendDataApi = async(obj:UserType)=>{
    const url = "https://api-register-users.onrender.com/user"
    try{
      await axios.post(url,obj)
      toast.success("Cadastrado com sucesso!")
      navigate("/")
      
    }catch(err){
      console.log("ERROR:",err);     
    }
  }


  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    setErros(null)

    const userData:UserType = {
      name,
      lastname,
      fone,
      email,
      password
    }

    const objErros = Validate(userData)

    if(Object.keys(objErros).length > 0){
      setErros(objErros)
      toast.warn("Preencha todos os campos corretamente")
      return;
    }



    setName('')
    setLastname('')
    setFone('')
    setEmail('')
    setPassword('')

    sendDataApi(userData)

  }

  return (
    <div className="userform_page">
      <div className="back-btn" onClick={()=>navigate("/")}>
        <FaArrowAltCircleLeft/>
      </div>

      <h2>Preencha todos os campos</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="campo_nome_sobrenome">
          <div>
            <input type="text" placeholder="Nome" onChange={(e)=>setName(e.target.value)}
            value={name}
            className={erros?.name && "inputError"}
            min={3}
            />
            {erros?.name && (
              <small>{erros.name}</small>
            )}
          </div>
          <div>
            <input type="text" placeholder="sobrenome" onChange={(e)=>setLastname(e.target.value)} value={lastname}
            className={erros?.lastname && "inputError"}
            />
            {erros?.lastname && (
              <small>{erros.lastname}</small>
            )}
           
          </div>
        </div>
        <div>
          <input type="tel" placeholder="telefone" onChange={(e)=>setFone(e.target.value)} value={fone}
          className={erros?.fone && "inputError"}
          min={8}
          />
          {erros?.fone && (
              <small>{erros.fone}</small>
            )}
        </div>
        <div>
          <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} value={email}
          className={erros?.email && "inputError"}
          />
          {erros?.email && (
              <small>{erros.email}</small>
            )}
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} value={password}
          className={erros?.email && "inputError"}
          min={6}
          />
          {erros?.password && (
              <small>{erros.password}</small>
            )}
        </div>
        <button
        type="submit"
        >
          Cadastrar
        </button>
      </form>

    </div>
  )
}
