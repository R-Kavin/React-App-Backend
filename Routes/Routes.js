const express = require('express')
const router = express.Router()
const {doctor}=require("../models")
const bcrypt = require('bcrypt')
const {validateToken} = require('../middlewares/AuthMiddleware')
const {sign, decode } = require('jsonwebtoken')

router.get("/", async(req, res)=>{
    const list = await doctor.findAll()
    res.json(list)
})


// router.post("/", async (req, res) => {
//     const doctors = req.body;
//     await doctor.create(doctors);
//     res.json(doctors);
//   });


router.post("/", validateToken, async (req, res) => {
  const {name, domain, email, password} = req.body
  bcrypt.hash(password,10).then((hash)=>{
    doctor.create({
      name: name,
      domain: domain,
      email: email,
      password: hash,
    })
    res.json("Successfully Registered")
  })

  // const doctor = req.body;
  // await doctors.create(doctor);
  // res.json(doctor);
});

  router.get('/byId/:docId',async (req, res)=>{
    const docId = req.params.docId
    const specificDoctor = await doctor.findByPk(docId);
    res.json(specificDoctor)
  })

  router.post('/login', async(req, res)=>{
  
    const { email, password} = req.body;
    const doctors = await doctor.findOne({where:{email: email}})
    // console.log(doctor)
    if(!doctors){
      res.json({error:"User Doesn't exist"});
    }else{
      bcrypt.compare(password,doctors.password).then(async(match)=>{
        if (!match){
          res.json({error: "Wrong Username and Password Combination"});
        } else{
          const userDetails = { id: doctors.id ,name: doctors.name, domain: doctors.domain, email: doctors.email}
          const accessToken = sign({email: doctors.email, id: doctors.id},
          "importantSecret");
          res.json({accessToken, userDetails})
        }
      })
    }
  })

module.exports = router