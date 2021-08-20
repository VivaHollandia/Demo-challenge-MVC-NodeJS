const express =require('express')
const router = require('./config/router');

require('./config/mongoose')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(router)
app.use(express.static('public'))
app.set('view engine', 'ejs')



app.listen( 8000, console.log('listening to port 8000'))
