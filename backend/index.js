const connectDB = require('./config/db');
const express = require('express')

connectDB();

const app = express()
const port = 3000

app.use(express.json()) // Middleware to parse JSON request body

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}/api/auth`)
})
