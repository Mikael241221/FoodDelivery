import mongoose from 'mongoose'; 


export const connectDB =  () => {
  mongoose.connect("mongodb://localhost:27017/food_delivery").then(()=>console.log("database connected")).catch((err)=>console.log(err))
}

