const express = require("express");
const {requireSignIn,isAdmin} = require("../middlewares/authMiddleware");
const formidable = require("express-formidable");
const { createProductController,getProductController,updateProductController,getSingleProductController,productPhotoController,deleteProductController,productFiltersController,productCountController,productListController,searchProductController,relatedProductController,productCategoryController,braintreeTokenController,brainTreePaymentController} = require("../controllers/productController");
const router = express.Router();

router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);

router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
  
  router.get("/get-product", getProductController);
  
  router.get("/get-product/:slug", getSingleProductController);

  router.get("/product-photo/:pid", productPhotoController);

  router.delete("/delete-product/:pid",requireSignIn,isAdmin, deleteProductController);

  router.post("/product-filters", productFiltersController);

  router.get("/product-count", productCountController);
  
  router.get("/product-list/:page", productListController);

  router.get("/search/:keyword", searchProductController);

  router.get("/related-product/:pid/:cid", relatedProductController);

  router.get("/product-category/:slug", productCategoryController);

  router.get("/braintree/token", braintreeTokenController);
  
  router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
module.exports = router;