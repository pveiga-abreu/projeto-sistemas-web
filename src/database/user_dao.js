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
  remove_user : (user) => {
    let list = [];
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString());

    list.filter(row => {
      return row.Id != user.id;
    })

    list = JSON.stringify(list);
    fs.writeFileSync('./src/database/users.json', list);
  }
}
