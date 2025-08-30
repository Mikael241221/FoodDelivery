import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

// Create an instance of the express router
const orderRouter = express.Router();

// Define the route for placing an order
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status",updateStatus)


// Export the orderRouter
export default orderRouter;