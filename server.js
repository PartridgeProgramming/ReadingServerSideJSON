const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/teas", (req, res) => {
  const teas = [];
  teas[0] = {
    name: "Green",
    caffine: "35-70mg",
    forms: "brick, bag, loose leaf, powdered(macha)",
    img: "images/green_tea.jpg",
  };
  teas[1] = {
    name: "Black",
    caffine: "60-90mg",
    forms: "brick, bag, loose leaf",
    img: "images/black_tea.jpg",
  };
  teas[2] = {
    name: "White",
    caffine: "30-55mg",
    forms: "brick, bag, loose leaf",
    img: "images/white_tea.jpg",
  };
  teas[3] = {
    name: "Oolong",
    caffine: "50-75mg",
    forms: "brick, bag, loose leaf",
    img: "images/oolong_tea.jpg",
  };
  teas[4] = {
    name: "Pu'er",
    caffine: "30-70mg",
    forms: "cake, bag, loose leaf, powdered",
    img: "images/puer_tea.jpg",
  };
  res.json(teas);
});

app.listen(3000, () => {
  console.log("Server started.")
});
