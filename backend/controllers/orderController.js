
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import orderRouter from "../routes/orderRoute.js";

// console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);
// Initialize Stripe with  secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//console.log("Stripe Secret Key:", stripe);

// placing user order for frontend
const placeOrder = async (req, res) => {
    
    //check if user is authenticated
    if (!req.body.userId) {
        return res.status(400).json({ message: "User ID is required" });
    }
 try {
    // Create a new order using the orderModel
    const newOrder = new orderModel({
        userId: req.body.userId,
        items: req.body.items,
        amount: req.body.amount,
        address: req.body.address
    });

    await newOrder.save();
    // Update the user's cart data to remove the items that were ordered
    // await userModel.findByIdUpdate(req.body.userId, {cartData: {}})
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });


    const line_itmems = req.body.items.map((item) =>({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.name,
                images: [item.image]
            },
            unit_amount: item.price * 100 // Convert to cents
        },
        quantity: item.quantity
    }))

    line_itmems.push({
        price_data: {
            currency: "usd",
            product_data: {
                name: "Delivery Charge",
            },
            unit_amount: 500 // $5.00 delivery charge
        },
        quantity: 1
    })
    // Create a Stripe session for payment
    const session = await stripe.checkout.sessions.create({
        line_items: line_itmems,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${process.env.CLIENT_URL}/verify?success=false&orderId=${newOrder._id}`,
    });
    // response
    res.json({success:true, session_url:session.url})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"}) // 8:5
 }
}
 const verifyOrder = async (req, res) => {
 const {orderId, success} = req.body;
 try {
    if(success = "true"){
        // Update the order status to payment successful
        await orderModel.findByIdAndUpdate(orderId, {payment:true});
        res.json({success:true, message:"Paid"});
    }
    else{
        // Update the order status to payment failed
        await orderModel.findByIdandDelete(orderId);
        res.json({success:false, message:"Payment Failed"});
 }
} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }
    
 }

 const userOrders = async (req, res) => {
 try {
     const orders = await orderModel.find({ userId: req.body.userId });
     res.json({ success: true, data: orders });
 } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
 }


 }

 const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }

 }
 // api for updating order status
 const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status}) 
    res.json({success:true, message:"Order Status Updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }
 }

export { placeOrder, verifyOrder , userOrders, listOrders,updateStatus };





