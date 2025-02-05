
const exp = require('constants');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express()


const PORT = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, '../frontend/public')))
app.use('/', require('./routes/root'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))