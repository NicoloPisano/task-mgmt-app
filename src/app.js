const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const userRouter = require('./routes/user.routes');
app.use('/v1', userRouter)

module.exports = app;