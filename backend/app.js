const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const authRoute = require('./routes/auth.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", authRoute)
app.listen('5000')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true} ,
    () => console.log("DB Connected!"))

// app.get('/Login', async (req, res) => {
//     try{
//         const salt = await bcrypt.genSalt()
//         const passwordHash = await bcrypt.hash(req.body.password, salt)
    
//         res.json({'test':123})

//     }catch{
//         res.status(501).send()
//     }
// })