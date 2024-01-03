const { Router } = require("express");
const { addProductEndpoint, getProductsEndpoint } = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/products", getProductsEndpoint);
productRouter.post("/products", addProductEndpoint);

module.exports = { productRouter };
