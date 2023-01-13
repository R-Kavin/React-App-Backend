const express = require('express')
const router = express.Router()
const {patient}=require("../models")
const bcrypt = require('bcrypt')
// const {validateToken} = require('../middlewares/AuthMiddleware')
// const {sign, decode } = require('jsonwebtoken')

router.post("/", async (req, res) => {
    const {name, age, email, password} = req.body
    bcrypt.hash(password,10).then((hash)=>{
      patient.create({
        name: name,
        age: age,
        email: email,
        password: hash,
      })
      res.json("Successfully Registered")
    })

  });

  module.exports = router
  