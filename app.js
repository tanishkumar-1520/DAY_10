const bcrypt = require('bcrypt');

const passwords = [
  "pass123", "secret99", "qwertyui", "myDog!Spot", "SecurePass#1",
  "Apple123", "B3tterW@y", "NodeJS#OK", "EncryptMe", "LongPass1234"
];

async function hashPasswords(passwordsArray) {
  const saltRounds = 10;
  
  // Replace items with their hashed values
  const hashedArray = await Promise.all(
    passwordsArray.map(async (password) => {
      return await bcrypt.hash(password, saltRounds);
    })
  );
  
  return hashedArray;
}

hashPasswords(passwords).then((hashedPasswords) => {
  console.log(hashedPasswords);
});
