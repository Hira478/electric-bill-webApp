const bcrypt = require("bcrypt");

const plaintextPassword = "admin";
const providedHash =
  "$2b$10$H48W0.9J9.NB5wG4B9/8b.PGZ2uUzyMf5cBQGvblTW2YzmZpPyS1K";

// Generate a hash for 'admin'
const generatedHash = bcrypt.hashSync(plaintextPassword, 10);

// Compare the generated hash with the provided hash
const hashesMatch = bcrypt.compareSync(plaintextPassword, providedHash);

console.log("Generated Hash:", generatedHash);
console.log("Provided Hash:", providedHash);
console.log("Hashes Match:", hashesMatch);
