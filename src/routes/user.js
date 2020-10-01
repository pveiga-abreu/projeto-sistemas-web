const user_controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        const data =  user_controller.search_user()
        res.render('user', {data:data})
});

router.get('/register', (req, res) => {
    res.render('user_reg_form', {user: null});
});
router.post('/register', (req, res) => {
    let user = req.body;

    let err = user_controller.insert_user(user);

    if(err === null) {
        res.status(201).redirect('/user');
    } else {
        res.render('user_reg_form', {user: user, err: err});
    }
});

router.get('/update/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let user = user_controller.search_user_by_id(id);

    res.render('user_up_form', {user: user, err: []});
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
