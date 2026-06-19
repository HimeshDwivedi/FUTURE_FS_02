const Admin=require("../models/Admin")
const jwt=require("jsonwebtoken")

const loginAdmin=async(req,res)=>{

  const {email,password}=req.body

  console.log("Email Received:", email)
  console.log("Password Received:", password)

  const admin=await Admin.findOne({email})

  console.log("Admin Found:", admin)

  if(!admin || admin.password!==password){

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