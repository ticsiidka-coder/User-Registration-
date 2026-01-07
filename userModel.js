const db = require('../config/db');

// CREATE user
exports.createUser = async (name, email, password) => {
  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const [result] = await db.execute(sql, [name, email, password]);
  return result;
};

// READ all users
exports.getAllUsers = async () => {
  const sql = `SELECT id, name, email FROM users`;
  const [rows] = await db.execute(sql);
  return rows;
};

// READ single user
exports.getUserById = async (id) => {
  const sql = `SELECT id, name, email FROM users WHERE id = ?`;
  const [rows] = await db.execute(sql, [id]);
  return rows[0];
};

// UPDATE user
exports.updateUser = async (id, name, email) => {
  const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
  const [result] = await db.execute(sql, [name, email, id]);
  return result;
};

// DELETE user
exports.deleteUser = async (id) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  const [result] = await db.execute(sql, [id]);
  return result;
};
