
const express = require('express')
const join = require('path').join
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')

const userRoute = require('./routes/users.js')
const jobsRoute = require('./routes/jobs.js')
const searchRoute = require('./routes/search.js')

const app = express()
dotenv.config()
const static = express.static

app.use(express.json())
app.use(morgan("common"))
app.use(cors())

app.use('/api/users', userRoute)
app.use('/api/jobs', jobsRoute)
app.use('/api/_search', searchRoute)


if (process.env.NODE_ENV === 'production') {
  console.log('\nproduction build\n')
  app.use(static(join(__dirname, '/client/build/')))
  app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}
else {
  console.log('\ndevelopment build\n')
  app.use(static(join(__dirname, '/client/public')))
  app.get('*', (req, res)=> {
    res.sendFile(join(__dirname, 'client', 'public', 'index.html'))
  })
}

const PORT = process.env.PORT || 3031

app.listen(PORT, (err) => {
  // if (err) return console.log(err)
  console.log(`Server running on port ${PORT}`);
})
