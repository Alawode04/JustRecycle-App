const express = require("express")
const app = express();
const port =3034;                  

app.get('/home', (req, res) => {
    res.send('Our Home Page')
});
app.get('/service', (req, res) => {
    res.send('Our Service Page')
});
app.listen(port,() => {
    console.log(`Server running on ${port}`)
})