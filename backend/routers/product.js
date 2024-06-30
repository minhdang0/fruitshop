import express from "express";
import {
  createProduct,
  deleteProduct,
  getFeaturedProduct,
  getProductBySearch,
  updateProduct,
  getDiscountedProducts,
  filterProductsByType,

} from "../controllers/productController.js";

const router = express.Router();

//create new Product
router.post("/", createProduct);
//update new Product
router.put("/:id", updateProduct);
//delete new Product
router.delete("/:id", deleteProduct);
//get product by type

router.get("/filter", filterProductsByType);

// get Product by feature
router.get("/search/getFeaturedProduct", getFeaturedProduct);
//get discount
router.get("/discounted", getDiscountedProducts);
export default router;