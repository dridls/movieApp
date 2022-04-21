const User = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send(200);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { createUser };
