const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const db = require("./models");


const doctorRoutes = require('./Routes/Routes')
app.use('/doctor',doctorRoutes)

const patientRoutes = require('./Routes/patient')
app.use('/patient',patientRoutes)

const appointmentRoutes = require('./Routes/appointment')
app.use('/appointment',appointmentRoutes)


db.sequelize.sync().then(() => {

    app.listen(5002,()=>{
        console.log("Server listening on 5002")
    })

});