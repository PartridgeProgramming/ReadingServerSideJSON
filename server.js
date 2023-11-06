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
    flavor: "fresh, grassy, and vegetal",
    aroma: "grassy, seaweed-like, or floral notes, with a slight earthiness",
    varieties: "Sencha, Matcha, Dragonwell, Gunpowder, Jasmine",
    img: "images/green_tea.jpg",
  };
  teas[1] = {
    name: "Black",
    caffine: "60-90mg",
    flavor: "robust and bold",
    aroma: "malty, fruity, or floral notes with a hint of caramel or honey",
    varieties: "Assam, Earl Grey, Darjeeling, Ceylon, Keemun",
    img: "images/black_tea.jpg",
  };
  teas[2] = {
    name: "White",
    caffine: "30-55mg",
    flavor: "delicate, subtle, and slightly sweet flavor",
    aroma: "fresh, floral, and sometimes fruity, with a light honey-like sweetness",
    varieties: "Silver Needle (Bai Hao Yin Zhen), White Peony (Bai Mu Dan), Shou Mei",
    img: "images/white_tea.jpg",
  };
  teas[3] = {
    name: "Oolong",
    caffine: "50-75mg",
    flavor: "between green and black teas in terms of flavor, offering a wide spectrum of tastes",
    aroma: "can vary significantly, with some having fruity or orchid-like notes, while others have roasted or woody undertones",
    varieties: "Tie Guan Yin, Da Hong Pao, Dong Ding, Ali Shan",
    img: "images/oolong_tea.jpg",
  };
  teas[4] = {
    name: "Pu'er",
    caffine: "30-70mg",
    flavor: "Raw pu'er is often earthy and vegetal, while ripe pu'er is known for its mellow, earthy, and sometimes woody taste",
    aroma: "earthy, sometimes musty or woody for ripe pu'er, and fresh, grassy, or floral for raw pu'er",
    varieties: "Sheng Pu'er, Shou Pu'er, Aged Pu'er",
    img: "images/puer_tea.jpg",
  };
  res.json(teas);
});

app.listen(3000, () => {
  console.log("Server started.")
});
