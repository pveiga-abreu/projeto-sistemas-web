const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        const data =  user_controller.search_user()
        res.render('user', {data:data})
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
