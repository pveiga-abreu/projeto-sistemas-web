const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        let users = await user_controller.search_user();

        users = users.map(cli => {
            if(cli.Sexo === 'M') cli.Sexo = 'Masculino';
            else if(cli.Sexo === 'F') cli.Sexo = 'Feminino';
      
            if(cli.EstadoCivil === '1') cli.EstadoCivil = 'Solteiro(a)';
            else if(cli.EstadoCivil === '2') cli.EstadoCivil = 'Casado(a)';
            else if(cli.EstadoCivil === '3') cli.EstadoCivil = 'Divorciado(a)';
            else if(cli.EstadoCivil === '4') cli.EstadoCivil = 'Viúvo(a)';
            else if(cli.EstadoCivil === '5') cli.EstadoCivil = 'Separado(a)';
      
            return cli; 
        });

        res.json(users);
    }catch(err){
        res.status(500).json({message: 'Erro ao buscar cliente!'})
    }
});

router.post('/', (req, res) => {
    try{
        let user = req.body;
        const validation = user_controller.insert_user(user);
        
        if(!validation.status){
            throw validation;
        }

        res.status(201).json({message: 'Usuário Registrado'});
    }catch(err){
        res.status(400).json(err.message)
    }

});

router.get('/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);
        const user = user_controller.search_user_by_id(id);

        res.json(user);
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

router.put('/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);
        let user = req.body;
    
        const validation = user_controller.update_user(id, user);
    
        if(!validation.status){
            throw validation;
        }

        res.status(201).json({message: 'Usuário Atualizado'});
    }catch(err){
        res.status(400).json(err.message)
    }
});

router.delete('/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);

        const validation = user_controller.remove_user(id);
        if(!validation.status){
            throw validation
        }
    
        res.json({message: 'Usuário Deletado'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

module.exports = router;
