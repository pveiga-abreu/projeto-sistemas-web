const fs = require('fs')

module.exports ={
  search_user : () => {
    let list =[]
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString())
    return list
  },
  insert_user : (user) => {
    let list =[]
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString())

    let newUser = JSON.parse(user.toString())
    list.push(newUser)
    list = JSON.stringify(list)
    fs.writeFileSync('./src/database/users.json', list)

  },
  modify_user : (user) => {
    let list =[]
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString())

    list.map(row => {
      if(row.Id == user.id){
        row = user
      }
    })

    list = JSON.stringify(list)
    fs.writeFileSync('./src/database/users.json', list)

  },
  remove_user : (user) => {
    let list =[]
    const data = fs.readFileSync('./src/database/users.json');
    list = JSON.parse(data.toString())

    list.filter(row => {
      return row.Id != user.id
    })

    list = JSON.stringify(list)
    fs.writeFileSync('./src/database/users.json', list)
  }

}