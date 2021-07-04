
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const model = require('./models/index')
const people = require('./routes/people')

app.get('/', (req, res) => res.render('Index'))

app.use(express.static('public'))
app.use('/people', people)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => console.log('CRUD_ORM Listening...'))