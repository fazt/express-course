const express = require("express");

const app = express();

// send a string to the browser
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/miarchivo", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  //   you can try with websites.txt as well
  res.sendFile("./javascript.jpg", {
    root: __dirname,
  });
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Ryan',
        lastname: 'Ray'
    });
});

app.get('/users', (req, res) => {
    res.json([
        {
            username: 'Ryan',
            lastname: 'Ray'
        },
        {
            username: 'John',
            lastname: 'Doe'
        },
        {
            username: 'Jane',
            lastname: 'Doe'
        }
    ]);
})

app.get('/isAlive', (req, res) => {
    res.status(200).end();
})

app.get('/isalive2', (req ,res) => {
    res.sendStatus(200);
})

app.listen(3000);
console.log("Server on port 3000");
