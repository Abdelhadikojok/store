const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3030;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi all");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
