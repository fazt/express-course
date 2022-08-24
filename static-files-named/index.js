const express = require("express");
const app = express();

// serving static files withou conflict
// diferen to:
//   app.use(express.static(publicPath))
//   app.use(express.static(userUploadPath))

// public/logo.png
const publicPath = path.resolve(__dirname, "public");
app.use("/public", express.static(publicPath));

// userUpload/logo.png
const uploadPath = path.resolve(__dirname, "userUpload");
app.use("/uploads", express.static(uploadPath));

app.listen(3000);
console.log("server on port 3000");
