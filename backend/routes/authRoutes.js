const express = require('express');
const { register, login } = require('../controllers/authController');
const { loginValidation, registerValidation } = require('../middleware/AuthValidation');
const router = express.Router();

router.post('/register',registerValidation, register);
router.post('/login',loginValidation, login);

module.exports = router;
