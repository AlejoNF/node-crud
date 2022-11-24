//? Dependencies
const router = require('express').Router()

//? File imports
const userServices = require('./quotes.services')

router.get('/users',userServices.getAllUsers)
router.post('/users',userServices.postNewUser)
router.get('/users/:id', userServices.getUserById)

module.exports = router