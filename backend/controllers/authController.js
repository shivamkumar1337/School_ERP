const { User } = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ where: { username } });
    if (user) {
      return res.status(409).json({ message: 'Username already exists!', success: false });
    }

    user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({ message: 'Email already exists!', success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userModel = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', userModel });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.generateToken(user.id);
    res.status(200).json({
      message: "Login Success",
      success: true,
      token,
      name: user.username
    });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};

module.exports = { register, login };
