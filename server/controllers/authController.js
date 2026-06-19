const Admin=require("../models/Admin")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const loginAdmin=async(req,res)=>{

  const {email,password}=req.body

  const admin=await Admin.findOne({email})

  if(!admin){

    return res.status(400).json({
      message:"Invalid credentials"
    })
  }

  const isMatch=await bcrypt.compare(
    password,
    admin.password
  )

  if(!isMatch){

    return res.status(400).json({
      message:"Invalid credentials"
    })
  }

  const token=jwt.sign(
    {id:admin._id},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
  )

  res.json({
    token
  })
}

module.exports={loginAdmin}