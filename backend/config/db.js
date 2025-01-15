import mongoose from "mongoose "

const connectDB =  async () => {
  await mongoose.connect('mongodb+srv://bashawdejenu1221:bd21211212@cluster0.wopwb.mongodb.net/?')
}