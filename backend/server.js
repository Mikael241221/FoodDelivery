import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4001


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
  res.send("API Working")
})


app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})





//mongodb+srv://fooddelve:Du2RQg6CxFxCDaWW@food-delv-demoo.bng6ofr.mongodb.net/?retryWrites=true&w=majority&appName=Food-delv-demoo
//mongodb+srv://fooddelve:Du2RQg6CxFxCDaWW@food-delv-demoo.bng6ofr.mongodb.net/?