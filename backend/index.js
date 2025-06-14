const connectDB = require('./config/db');
const express = require('express')

connectDB();

const app = express()
const port = 5000

app.use(express.json()) // Middleware to parse JSON request body

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`BrainBin Backend listening on port  http://localhost:${port}/api/auth`)
})
