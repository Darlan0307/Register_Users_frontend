import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import Table from '../../Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserType } from '../../../@types/UserType'
import ModelForm from '../../Model'

export default function Gerenciamento() {

const navigate = useNavigate()
const [data,setData] = useState<UserType[] | []>([])
const [activedUser,setActivedUser] = useState<UserType | null>(null)

 async function fetchData(){
  const url = "https://api-register-users.onrender.com/users"

  try{
    const response = await axios.get(url)
    setData(response.data);
  }catch(err){
    console.log("Error:",err);
  }
}

useEffect(()=>{
  fetchData();
},[])

  return (
    <div className='gerenciamento_page'>
      <div className="back-btn" onClick={()=>navigate("/")}>
        <FaArrowAltCircleLeft/>
      </div>
      <h2>Gerenciamento dos Usuários</h2>
      <Table data={data} setActivedUser={setActivedUser}/>
      <ModelForm activedUser={activedUser} setActivedUser={setActivedUser}/>
    </div>
  )
}
