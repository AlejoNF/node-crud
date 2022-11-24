const express = require('express')

//? Routes
const quoteRouter = require('./users/users.router')

//? Initial config
const port  = 9000
const app = express()

//?json request avaliable
app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json({message:'Ok'})
})
//? API v1 Routes
app.use('/api/v1',quoteRouter)

//? start server
app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})