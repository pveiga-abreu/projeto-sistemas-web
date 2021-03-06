const fs = require('fs')

module.exports ={
  search_user : () => {
    try{
      let list = [];
      const data = fs.readFileSync('./src/database/users.json');
      list = JSON.parse(data);

      const newlist = list.map(({Senha, ...rest}) => rest)
      return newlist;
    }catch(err){
      return err
    }
  },
  search_user_by_id : (id) => {
    try{
      const data = fs.readFileSync('./src/database/users.json');
      let list = JSON.parse(data);

      const user = list.filter(row => row.Id == id);
      return user[0];
    }catch(err){
      return err
    }
  },
  insert_user : (user) => {
    try {
      let list = [];
      const data = fs.readFileSync('./src/database/users.json');
      list = JSON.parse(data);
  
      //  Determinando ID
      let _id = 1;

      if (list.length > 0) {
        let last = list[list.length - 1]; 
        _id = last.Id + 1;
      } 
  
      user.Id = _id;
      list.push(user);
      list = JSON.stringify(list);
      fs.writeFileSync('./src/database/users.json', list);

    } catch(err) {
      throw err;
    }
  },
  modify_user : (id, user) => {
    try{
      let list = [];
      const data = fs.readFileSync('./src/database/users.json');
      list = JSON.parse(data);

      let newList = list.map(row => {
        if(row.Id == id){
          row = user
          row.Id = id
        }
        return row
      })
      
      newList = JSON.stringify(newList);
      fs.writeFileSync('./src/database/users.json', newList);
    }catch(err){
      return err
    }
  },
  remove_user : (id) => {
    try{
      let list = [];
      const data = fs.readFileSync('./src/database/users.json');
      list = JSON.parse(data.toString());

      let newList  = list.filter(row => row.Id !== id)

      newList = JSON.stringify(newList);
      fs.writeFileSync('./src/database/users.json', newList);
    }catch(err){
      return err
    }
  }
}
