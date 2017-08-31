const express = require('express');
const app = express();

// public/logo.png
const publicPath = path.resolve(__dirname, 'public');
app.use('/public', express.static(publicPath));

// userUpload/logo.png
const publicPath = path.resolve(__dirname, 'userUpload');
app.use('/uploads', express.static(userUploadPath));

app.listen(3000, () => {
  console.log('server on port 3000');
});
