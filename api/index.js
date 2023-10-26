require('dotenv').config()//Importar paquete
const { patch } = require('moongose/routes')
const Server = require('./models/server')

const server= new Server // intanciar el objeto
server.listen()


//app.use(express.statick(patch.join(__dirname, 'dist')))