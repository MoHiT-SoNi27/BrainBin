const connectDB = require('./config/db');
const express = require('express')

connectDB();

const app = express()
const port = 3000

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}/api/auth`)
})
