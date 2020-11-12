const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const users = await user_controller.search_user();
        res.json({status: true, data: users});
    }catch(err){
        res.status(500).json({status: false, message: err.message})
    }
});

router.post('/register', (req, res) => {
    try{
        let user = req.body;
        const validation = user_controller.insert_user(user);

        if(!validation.status){
            throw validation
        }
    
        res.status(201).json({status: true, message: 'Usuário Registrado'});
    }catch(err){
        console.log(err)
        res.status(400).json({status: false, message: err.message})
    }

});

router.get('/search/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);
        const user = user_controller.search_user_by_id(id);

        res.json({status: true, data: user});
    }catch(err){
        res.status(500).json({status: false, message: err.message})
    }
});
router.put('/update/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);
        let user = req.body;
    
        const validation = user_controller.update_user(id, user);
    
        if(!validation.status){
            throw validation
        }

        res.status(201).json({status: true, message: 'Usuário Atualizado'});
    }catch(err){
        res.status(400).json({status: false, message: err.message})
    }
});

router.delete('/delete/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);

        const validation = user_controller.remove_user(id);
        if(!validation.status){
            throw validation
        }
    
        res.json({status: true, message: 'Usuário Deletado'});
    }catch(err){
        res.status(500).json({status: false, message: err.message})
    }
});

module.exports = router;
