const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5050, () => {
  console.log("Server is listening on port 3000");
});
