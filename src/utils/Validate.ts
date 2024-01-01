import { UserType } from "../@types/UserType";

type Error = {
  [key : string]:String
}

export const Validate = (data : UserType) => {

  const erros : Error = {}

  if(!data.name){
    erros['name'] = 'O nome é obrigatório'
  }
  if(!data.lastname){
    erros['lastname'] = 'O sobrenome é obrigatório'
  }
  if(!data.fone){
    erros['fone'] = 'O telefone é obrigatório'
  }
  if(!data.email){
    erros['email'] = 'Campo email é obrigatório'
  }
  if(!data.password){
    erros['password'] = 'A senha é obrigatória'
  }

  return erros
}

