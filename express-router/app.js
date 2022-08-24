const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api_router");

const app = express();

const staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", apiRouter);

app.listen(3000);
console.log("server on port 3000");
