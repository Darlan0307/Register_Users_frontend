import './styles.scss'
import { IoIosCloseCircle } from "react-icons/io";
import { UserType } from '../../@types/UserType'

type modelType = {
  activedUser:UserType | null,
  setActivedUser: (user:UserType|null) => any
}

const ModelForm = ({activedUser,setActivedUser}:modelType) => {
  return (
    <>
      {activedUser && (
        <div className='container-model-form'>
          <div className='model-form'>
            <button className='close-modal' type='button' onClick={()=>setActivedUser(null)}>
              <IoIosCloseCircle/>
            </button>
            <h2>Atualizando os dados de Darlan</h2>
            <form className='form'>
              <div>
                <input type="text" value="nome" />
              </div>
              <div>
                <input type="text" value="sobrenome" />
              </div>
              <div>
                <input type="tel" value="telefone" />
              </div>
              <div>
                <input type="email" value="email" />
              </div>
              <div>
                <input type="text" value="password" />
              </div>
              <button type='submit'>Atualizar</button>
            </form>
        </div>
      </div>
      )}
    </>
  )
}

export default ModelForm