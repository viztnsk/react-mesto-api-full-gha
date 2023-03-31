require('dotenv').config();

const NODE_ENV = process.env;
const { JWT_SECRET = '569856448aaa06706bdcdff06b9e1bc71622d0af38f58d5f617eb6d6c1f1359b' } = process.env;
const { PORT = 3000 } = process.env;
const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_ADDRESS,
};
