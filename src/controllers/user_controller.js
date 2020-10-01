const user_dao = require('../database/user_dao');

function validate_user(user) {
    let err = []

    if(user.Nome == '' || user.Nome == null || typeof user.Nome == "undefined") err.push("Nome");
    if(user.Sobrenome == '' || user.Sobrenome == null || typeof user.Sobrenome == "undefined") err.push("Sobrenome");
    if(user.Email == '' || user.Email == null || typeof user.Email == "undefined") err.push("Email");
    if(user.Senha == '' || user.Senha == null || typeof user.Senha == "undefined") err.push("Senha");
    if(user.DataNascimento != '' && user.DataNascimento.search(/^[0-3][0-9]\/[0-1][0-9]\/[0-9][0-9][0-9][0-9]$/g) == -1) err.push("Data de Nascimento");
    if(user.CEP != '' && user.CEP.search(/^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/g) == -1) err.push("CEP");

    return err;
}

module.exports = {
    insert_user: user => {
        let err = validate_user(user);
        if(err.length === 0) {
            user_dao.insert_user(user);
            return null;
        } else {
            return err;
        }
    },
    search_user: () => {
        const users =  user_dao.search_user();
        return users;
    },
    search_user_by_id: (id) => {
        let user = user_dao.search_user_by_id(id);

        return user;
    },
    update_user: (id, user) => {
        let err = validate_user(user);
        if(err.length === 0) {
            user_dao.modify_user(id, user);
            return null;
        } else {
            return err;
        }

    },
    remove_user: id => {
        user_dao.remove_user(id);
    }
}
