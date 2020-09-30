const express = require('express');
const router = express.Router();
const dataUsers = require('../database/user_dao')

router.get('/', async (req, res) => {
    
    const data = await dataUsers.searchUsers()
    console.log(data)
    res.render('user',{data});
});

router.get('/register', (req, res) => {
    res.render('user_register');
});

router.post('/register', (req, res) => {
    console.log(req.url);
    console.log(req.body);
    res.status(201).send({
        status: true
    });
});

module.exports = router;
