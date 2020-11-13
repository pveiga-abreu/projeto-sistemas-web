const model = require('../model/user_model');

estado_civil = {
  '1': 'Solteiro',
  '2': 'Casado',
  '3': 'Divorciado',
  '4': 'Viúvo', 
  '5': 'Separado'
}

module.exports = {

  get_users: async () => {

    const response = await model.get_users();

    if(response === null) {
      return null; 
    } else { 
      let users = response.data;

      for(let user of users) {
        user.EstadoCivil = estado_civil[user.EstadoCivil];
        
        if(user.Sexo === 'M') user.Sexo = 'Masculino';
        else if(user.Sexo === 'F') user.Sexo = 'Feminino';
        else user.Sexo = '';
      }

      return users;
    }

  },
  get_user_by_id: async id => {

    const response = await model.get_user_by_id(id);
    
    if(response === null) return null;
    else return response.data[0];

  }

}
