import express from "express";

import {
   addToCart, 
   getCart,
   updateCartItem,
   deleteCartItem,
   clearCart,
   calculateTotal
} from "../controllers/cartController.js";

const router =express.Router();

router.post('/',addToCart);

router.get('/:userId', getCart);

router.put('/',updateCartItem);

router.delete('/', deleteCartItem);

router.delete('/clear', clearCart);

router.get('/total/:userId', calculateTotal);

export default router;