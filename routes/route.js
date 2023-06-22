import express from "express";


import { signUp,login } from "../controllers/Authentication.js";
import { authenticateToken } from "../controllers/authController.js";
import { getOrders,addToCard,updateOrder,deleteOrder, checkOutOneByOne} from "../controllers/orderController.js";
import { getProduct,createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();


router.post("/login",login)
router.post("/signUp",signUp)


router.get("/product",authenticateToken,getProduct)
router.post("/product",authenticateToken,createProduct)
router.put("/product/:name",authenticateToken,updateProduct)
router.delete("/product/:name",authenticateToken,deleteProduct)

router.get("/order",authenticateToken,getOrders)
router.post("/order",authenticateToken,addToCard)
router.put("/order/:productName",authenticateToken,updateOrder)
router.delete("/order/:productName",authenticateToken,deleteOrder)


router.post("/checkout/:productName",authenticateToken,checkOutOneByOne)

export default router;