import { placeOrder } from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

// Create an instance of the express router
const orderRouter = express.Router();

// Define the route for placing an order
orderRouter.post("/place", authMiddleware, placeOrder);

// Export the orderRouter
export default orderRouter;