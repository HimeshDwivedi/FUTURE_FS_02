const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const leadRoutes=require("./routes/leadRoutes")

const app=express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crm")

app.use("/api/leads",leadRoutes)

app.get("/",(req,res)=>{
  res.send("CRM API Running")
})

app.listen(5000,()=>{
  console.log("Server Running")
})