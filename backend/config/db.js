 import mongoose from 'mongoose'; 

 export const connectDB =async () => {
  await mongoose.connect('mongodb+srv://fooddelve:Du2RQg6CxFxCDaWW@food-delv-demoo.bng6ofr.mongodb.net/food-del')
  .then(() => console.log("DB connected"));
 }












