const express = require("express")

const app = express()

app.get("/" , (req , res) => {
    res.send('<h1>Hello from your simple Express server!</h1>')
})

app.get('/health', (req, res) => {
      res.status(200).json({ status: 'UP' });
    });

app.listen(3000 , () => {
    console.log("connected to server")
})