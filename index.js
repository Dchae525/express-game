const express = require('express')
const app = express()
const port = 3333
const path = require('path')

app.get('/puppy', (req, res) => {
    res.sendFile(path.resolve('index.jpg'))
}).get('/hello/:name', (req, res) => {
    res.send('hello  '+req.params.name.toLocaleUpperCase())
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
