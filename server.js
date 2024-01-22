const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For simplicity, hardcoded credentials with hashed password
const hardcodedCredentials = {
  username: "admin",
  passwordHash: "$2b$10$rEHfGs1Cq/qq82mAz2/ZJeauBy4ANntLUcmLxSj3kOc7W8cd8x.3i", // Update this line
};

app.post("/process_login", (req, res) => {
  const { username, password } = req.body;

  console.log("Received:", username, password);

  // Simple authentication logic with bcrypt
  const passwordMatch = bcrypt.compareSync(
    password,
    hardcodedCredentials.passwordHash
  );

  if (username === hardcodedCredentials.username && passwordMatch) {
    // Authentication success
    res.redirect("/dashboard");
  } else {
    // Authentication failure
    res.send("Invalid username or password");
  }
});

// Redirect root URL to the login page
app.get("/", (req, res) => {
  res.redirect("/login");
});

// Serve login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Serve dashboard
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.get("/manage_user", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "manage_user.html"));
  // You can add logic here to fetch and render user data if needed
});

app.get("/manage_tariff", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "manage_tariff.html"));
  // You can add logic here to fetch and render tariff data if needed
});

app.get("/manage_customer", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "manage_customer.html"));
  // You can add logic here to fetch and render customer data if needed
});

app.get("/manage_billing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "manage_billing.html"));
  // You can add logic here to fetch and render billing data if needed
});

app.get("/logout", (req, res) => {
  // Add logic here for user logout (e.g., clear session)
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static("public"));
