module.exports ={
  searchUsers : () => {
    return new Promise(async (resolve, reject) => {
      try{
        const user = [
          {
          Id: 1,
          Nome: "Lucas",
          Sobrenome: "Alves",
          Senha: "123",
          Email: "lucastalves@ucl.br",
          Sexo: "M",
          CPF: "12345678910",
          RG: "1355553",
          Telefone: "999999999",
          DataNascimento: "19/03/1984",
          EstadoCivil: 2,
          CEP: "29123456",
          Endereco: "Nome da minha Rua, 100, Serra, ES"
          }
        ]
        resolve(user)
      }catch(err){
        reject()
      }
    })
  }
}