const mongoose = require('mongoose')
const db = 'mongodb+srv://Farkad:Farkad@cluster0.flvrk.mongodb.net/demoChalleng?retryWrites=true&w=majority'

mongoose.connect(db , {useNewUrlParser: true,  useUnifiedTopology: true})
.then (res =>console.log("connected to db"))
.catch(err => console.log(err))