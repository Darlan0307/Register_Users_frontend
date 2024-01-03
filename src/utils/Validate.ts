import { UserType } from "../@types/UserType";

type Error = {
  [key : string]:String
}

export const Validate = (data : UserType) => {

  const erros : Error = {}

  if(!data.name){
    erros['name'] = 'O nome é obrigatório'
  }else if(data.name.length < 3){
    erros['name'] = 'mínimo 3 caracteres'
  }

  if(!data.lastname){
    erros['lastname'] = 'O sobrenome é obrigatório'
  }else if(data.lastname.length < 3){
    erros['lastname'] = 'Mínimo de 3 caracteres'
  }
  if(!data.fone){
    erros['fone'] = 'O telefone é obrigatório'
  }else if(data.fone.length < 8){
    erros['fone'] = 'Digite um número de telefone válido'
  }else if(isNaN(Number(data.fone))){
    erros['fone'] = 'somente numeros'
  }
  if(!data.email){
    erros['email'] = 'Campo email é obrigatório'
  }
  if(!data.password){
    erros['password'] = 'A senha é obrigatória'
  }else if(data.password.length < 6){
    erros['password'] = 'mínimo de 6 caracteres'
  }

  return erros
}

