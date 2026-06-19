const jwt=require("jsonwebtoken")

const protect=async(req,res,next)=>{
  const token=req.headers.authorization

  if(!token){
    return res.status(401).json({
      message:"Not authorized"
    })
  }

  try{
    jwt.verify(token,process.env.JWT_SECRET)
    next()
  }
  catch(error){
    res.status(401).json({
      message:"Invalid token"
    })
  }
}

module.exports=protect