module.exports = {
  validate_user: user => {
    let err = []

    if(user.Nome == '' || user.Nome == null || typeof user.Nome == "undefined") err.push('Nome é obrigatório');
    if(user.Sobrenome == '' || user.Sobrenome == null || typeof user.Sobrenome == "undefined") err.push('Sobrenome é obrigatório');
    if(user.Email == '' || user.Email == null || typeof user.Email == "undefined") err.push('Email é obrigatório');
    if(user.Senha == '' || user.Senha == null || typeof user.Senha == "undefined") err.push('Senha é obrigatório');
    if(user.DataNascimento != "" && user.DataNascimento.search(/^[0-3][0-9]\/[0-1][0-9]\/[0-9][0-9][0-9][0-9]$/g) == -1) err.push('Data de Nascimento precisa estar no formato dd/mm/aaaa');
    if(user.CEP != "" && user.CEP.search(/^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/g) == -1) err.push('CEP precisa estar no formato 00000-000');

    return err;
  }
}