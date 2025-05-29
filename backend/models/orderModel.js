import mongoose from "mongoose";
// const orderSchema = new mongoose.Schema({
//     userId:{type:String, required:true},
//     items:{type:Array, required:true},
//     amount:{type:Number, required:true},
//     address:{type:String, required:true},
//     status:{type:String, default:"foood is being prossesing"},
//     date:{type:Date, default:Date.now()},
//     payment:{type:Boolean, default:false}

// })
// Create a model from the schema


const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String },
    phone: { type: String },
  },
  status: { type: String, default: "food is being processed" },
  date: { type: Date, default: Date.now },
  payment: { type: Boolean, default: false },
});

const orderModel = mongoose.models.order || mongoose.model("Order", orderSchema);
// Export the model
export default orderModel;
