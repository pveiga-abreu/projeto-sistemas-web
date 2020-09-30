const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    

    res.render('user');
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
