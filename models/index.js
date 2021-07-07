
const Sequelize = require('sequelize')
const sequelize = new Sequelize('registerorm', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

sequelize.authenticate(() => console.log('Authenticate!'))