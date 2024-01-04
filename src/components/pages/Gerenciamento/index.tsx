import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import Table from '../../Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserType } from '../../../@types/UserType'
import ModalUpdate from '../../ModalUpdate'
import ModalRemove from '../../ModalRemove'

export default function Gerenciamento() {

const navigate = useNavigate()
const [data,setData] = useState<UserType[] | []>([])
const [activedUserUpdate,setActivedUserUpdate] = useState<UserType | null>(null)
const [activedUserRemove,setActivedUserRemove] = useState<UserType | null>(null)
const [isLoading,setIsLoading] = useState(true)




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
      <Table data={data} setActivedUserUpdate={setActivedUserUpdate} setActivedUserRemove={setActivedUserRemove} setIsLoading={setIsLoading} isLoading={isLoading}/>
      <ModalUpdate activedUserUpdate={activedUserUpdate} setActivedUserUpdate={setActivedUserUpdate}/>
      <ModalRemove activedUserRemove={activedUserRemove} setActivedUserRemove={setActivedUserRemove}/>
    </div>
  )
}
