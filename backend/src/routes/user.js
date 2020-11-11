const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const data = await user_controller.search_user();
        res.json({status: true, data: data});
    }catch(err){
        res.status(500).json({status: false, message: err.message})
    }
});

router.post('/register', (req, res) => {
    try{
        let user = req.body;

        
        const validation = user_controller.insert_user(user);
        if(validation.length > 0){
            throw validation
        }
    
        res.status(201).json({status: true, message: 'Usuário Registrado'});
    }catch(err){
        console.log(err)
        res.status(500).json({status: false, message: err})
    }

});

router.get('/search/:id', (req, res) => {
    try{
        let id = parseInt(req.params.id);

        let user = user_controller.search_user_by_id(id);

        res.json({status: true, data: user});

    }catch(err){
        res.status(500).json({status: false, message: err.message})
    }
});
router.post('/update/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = req.body;

    let err = user_controller.update_user(id, user);

    if(err === null) {
        res.status(201).redirect('/user');
    } else {
        res.render('user_up_form', {user: user, err: err});
    }
});

router.post('/delete/:id', (req, res) => {
    let id = parseInt(req.params.id);
    user_controller.remove_user(id);

    res.redirect('/user');
});

module.exports = router;
