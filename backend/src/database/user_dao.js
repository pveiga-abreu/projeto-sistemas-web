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

      const newlist = list.filter(row => row.Id == id)
      const user = newlist.map(({Senha, ...rest}) => rest)
      return user
    }catch(err){
      return err
    }
  },
  insert_user : (user) => {
    try{
      let list = [];
      const data = fs.readFileSync('./src/database/users.json');
      list = JSON.parse(data);
  
      //  Determinando ID
      let last = list[list.length - 1];
      let _id = last.Id + 1;
  
      user.Id = _id;
      list.push(user);
      list = JSON.stringify(list);
      fs.writeFileSync('./src/database/users.json', list);

    }catch(err){
      return err
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
