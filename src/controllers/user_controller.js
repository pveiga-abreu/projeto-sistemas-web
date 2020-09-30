const user_dao = require('../database/user_dao');

function generate_id() {
    
}

function validate_user(user) {
    if(user.Nome == '' || user.Nome == null || typeof user.Nome == "undefined") return false;
    if(user.Sobrenome == '' || user.Sobrenome == null || typeof user.Sobrenome == "undefined") return false;
    if(user.Email == '' || user.Email == null || typeof user.Email == "undefined") return false;
    if(user.Senha == '' || user.Senha == null || typeof user.Senha == "undefined") return false;
    if(user.DataNascimento != '' && user.DataNascimento.search(/^[0-3][0-9]\/[0-1][0-2]\/[0-9][0-9][0-9][0-9]$/g) == -1) return false;
    if(user.CEP != '' && user.CEP.search(/^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/g) == -1) return false;

    return true;
}

module.exports = {
    insert_user: user => {
        let valid = validate_user(user);
        if(valid) {
            // Inserir dados no json

            return true;
        } else {
            return false;
        }
    }
}
