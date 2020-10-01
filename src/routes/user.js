const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();
const dataUsers = require('../database/user_dao')

router.get('/', async (req, res) => {
    
    const data = await dataUsers.searchUsers()
    console.log(data)
    res.render('user',{data});
});

router.get('/register', (req, res) => {
    res.render('user_form', {user: null});
});

router.post('/register', (req, res) => {
    let user = req.body;

    let resp = user_controller.insert_user(user);

    if(resp) {
        res.status(201).redirect('/user');
    } else {
        res.render('user_form', {user: user});
    }
});

module.exports = router;
