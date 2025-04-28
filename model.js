const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const SECRET_KEY = 'your-secret-key';


const studschema = new mongoose.Schema(
  {
    email: String,
    pass: String,
  },
  {
    timestamps: true,
  }
);

const studmodel = mongoose.model("students", studschema);
async function reguser(email, pass) {
  const data = new studmodel({ email, pass });
  data.save();
  return data;
}

async function loguser(email, pass) {
  const user = await studmodel.findOne({ email });
  if (!user) return "invalid user";

  const password = await bcrypt.compare(pass, user.pass);
  if (!password) return "invalid pass";

  const token = jwt.sign(
    { id: user._id, email: user.email },
    SECRET_KEY,
    { expiresIn: '1h' }
  );


  return token;


}
module.exports = {
  reguser,
  loguser
};
