const controller = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
  const users = await controller.get_users();

  res.render('user', {data: users});
});

router.get('/register', (req, res) => {
  res.render('user_reg_form', {user: null});
});

router.get('/update/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  const user = await controller.get_user_by_id(id);
  console.log(user);

  res.render('user_up_form', {user: user, err: []});
});

module.exports = router;
