const fs = require('fs')

module.exports ={
  search_user : () => {
    let list = [];
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data);
    return list;
  },
  search_user_by_id : (id) => {
    const data = fs.readFileSync('./src/database/users.json');
    let list = JSON.parse(data);

    for(const user of list) {
      if(user.Id === id) {
        return user;
      }
    }

    return null;
  },
  insert_user : (user) => {
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
  },
  modify_user : (id, user) => {
    let list = [];
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data);

    for(let i=0; i <list.length; i++) {
      if(list[i].Id === id) {
        list[i] = user;
        list[i].Id = id;
      }
    }
    
    list = JSON.stringify(list);
    fs.writeFileSync('./src/database/users.json', list);
  },
  remove_user : (id) => {
    let list = [];
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString());

    for(let i=0; i<list.length; i++) {
      if(list[i].Id === id) {
        list.splice(i,1);
      }
    }

    list = JSON.stringify(list);
    fs.writeFileSync('./src/database/users.json', list);
  }
}
