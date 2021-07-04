
const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/people')

router.get('/', peopleController.index)

module.exports = router