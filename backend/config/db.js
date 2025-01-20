import mongoose from 'mongoose'; 


export const connectDB =  async () => {
  await mongoose.connect('mongodb+srv://bashawdejenu1221:bd21211212@cluster0.wopwb.mongodb.net/food-del').then(() => console.log("DB Connected"))
}

