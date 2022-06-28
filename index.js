const express = require("express");
const app = express();
const port = 3000;
const a = [
  { name: "said", roll: "02" },
  { name: "said", roll: "02" },
  { name: "said", roll: "02" },
  { name: "said", roll: "02" },
];
app.get("/all", (req, res) => {
  res.send(a);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
