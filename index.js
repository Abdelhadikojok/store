const express = require("express");
const app = express();
var cors = require("cors");
const xlsx = require("xlsx");
const fs = require("fs");
const PORT = process.env.PORT || 3030;

app.use(cors());

const wb = xlsx.readFile("./data.xlsx", { dateNF: "mm/dd/yyyy" });

const ws = wb.Sheets["category"];

const data = xlsx.utils.sheet_to_json(ws, { raw: false });

let newData = data.map((ele) => {
  if (ele.paid === "TRUE") {
    ele.paid = true;
  }
  if (ele.paid === "FALSE") {
    ele.paid = false;
  }
  return ele;
});

app.get("/with-us", (req, res) => {
  res.send(newData);
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
