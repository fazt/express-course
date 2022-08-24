const express = require("express");
require("colors");

const app = express();

let products = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
  },
];

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method.bgGreen} ${req.url.bgYellow}`);
  next();
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send("Product name and price are required");
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id));
  res.sendStatus(204);
});

app.all("/products/count", (req, res) => {
  res.json({ count: products.length });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return res.status(404).json({ error: "Product not found" });

  product.name = name;
  product.price = price;

  res.json(product);
});

app.listen(3000);
console.log("Server on port 3000");
