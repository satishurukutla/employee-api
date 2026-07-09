const express = require("express");

const app = express();

app.use(express.json());

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
  res.send("Employee API Running");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});