import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import Table from '../../Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserType } from '../../../@types/UserType'

export default function Gerenciamento() {

const navigate = useNavigate()
const [data,setData] = useState<UserType[] | []>([])


 /* https://api-register-users.onrender.com */

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
      <Table data={data}/>
    </div>
  )
}
