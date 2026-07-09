const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

console.log("Application Name:", APP_NAME);
console.log("Database Password:", DB_PASSWORD);

const employees = [
  {
    id: 1,
    name: "Rahul",
    role: "Developer"
  },
  {
    id: 2,
    name: "Priya",
    role: "Tester"
  }
];

app.get("/", (req, res) => {
  res.send("Employee development API'ss");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});