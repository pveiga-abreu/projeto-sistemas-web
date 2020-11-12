module.exports = {
  validate_user: user => {
    let err = []

    if(user.Nome == '' || user.Nome == null || typeof user.Nome == "undefined") err.push({Nome: 'Campo não informado'});
    if(user.Sobrenome == '' || user.Sobrenome == null || typeof user.Sobrenome == "undefined") err.push({Sobrenome: 'Campo não informado'});
    if(user.Email == '' || user.Email == null || typeof user.Email == "undefined") err.push({Email: 'Campo não informado'});
    if(user.Senha == '' || user.Senha == null || typeof user.Senha == "undefined") err.push({Senha: 'Campo não informado'});
    if(typeof user.DataNascimento != "undefined" && user.DataNascimento.search(/^[0-3][0-9]\/[0-1][0-9]\/[0-9][0-9][0-9][0-9]$/g) == -1) err.push({DataNascimento: 'Campo não passou na validação'});
    if(typeof user.CEP != "undefined" && user.CEP.search(/^[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/g) == -1) err.push({CEP: 'Campo não passou na validação'});

    return err;
  }
}