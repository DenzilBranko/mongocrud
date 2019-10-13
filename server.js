const server = require('./app')

const port = process.env.PORT || 5000
server.listen(port,() => {
    console.log(`server is up ${port}`)
})

module.exports = server

