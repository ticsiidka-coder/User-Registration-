const User = require('../models/userModel');

// REGISTER user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await User.createUser(name, email, password);
    res.status(201).json({ message: 'User registered', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET single user
exports.getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE user
exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.updateUser(req.params.id, name, email);
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE user
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
