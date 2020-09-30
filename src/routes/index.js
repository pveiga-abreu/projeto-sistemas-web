const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.status(200).send({status: true});
    res.render('index', { title: 'Index Page' });
});

module.exports = router;
