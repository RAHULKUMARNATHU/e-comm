const bcrypt = require("bcryptjs");
const Seller = require("../../models/seller.model");

//1. Generate Hashed Password
async function hashPassword(passKey) {
  const password = passKey;
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
}

//2. Verify Hashed Password
async function verifyPassword(passKey) {
  const password = passKey.password;
  let hashedPassword;
  const isSellerExist = await Seller.findOne({ email: passKey.email });
  if (isSellerExist) {
    hashedPassword = isSellerExist.password;
  } else {
    return;
  }
  const verifyPassword = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, verify) {
      if (err) reject(err);
      resolve(verify);
    });
  });
  return verifyPassword;
}

module.exports = {
  hashPassword,
  verifyPassword,
};
