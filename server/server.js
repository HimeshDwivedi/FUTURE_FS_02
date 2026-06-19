require("dotenv").config()
const authRoutes=require("./routes/authRoutes")
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const leadRoutes=require("./routes/leadRoutes")

const app=express()

app.use(cors())
app.use("/api/auth",authRoutes)
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongoDB Connected")
})
.catch((error)=>{
  console.log(error)
})

app.use("/api/leads",leadRoutes)

app.get("/",(req,res)=>{
  res.send("CRM API Running")
})

const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
  console.log(`Server Running On Port ${PORT}`)
})