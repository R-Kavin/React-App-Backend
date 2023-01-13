const express = require('express')
const router = express.Router()
const {appointment}=require("../models")

router.get('/:doctorId',async (req, res)=>{
    const doctorId = req.params.doctorId
    const specificAppointment = await appointment.findAll({where:{ doctorId: doctorId}});
    res.json(specificAppointment)
  })

  router.post('/', async(req, res)=>{
    const appointments = req.body
    await appointment.create(appointments)
    res.json(appointments)
})

module.exports = router