
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express()


const PORT = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, '../frontend/public')))
app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '../frontend/public/404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found" })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))