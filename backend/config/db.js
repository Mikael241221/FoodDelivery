 import mongoose from 'mongoose'; 
 import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

 export const connectDB =async () => {
  await mongoose.connect(MONGO_URI)
  .then(() => console.log("DB is connected"));
 }



 //"mongodb+srv://food_delivery:21@27@12@cluster0.xft58.mongodb.net/food-del"












