require("dotenv").config()

const mongoose=require("mongoose")

const Admin=require("./models/Admin")

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

  await Admin.deleteMany()

  await Admin.create({
    email:"admin@gmail.com",
    password:"admin123"
  })

  console.log("Admin Reset Done")

  process.exit()
})