const { Router } = require("express");
const { addProductEndpoint, getProductsEndpoint } = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/restaurants", getProductsEndpoint);
productRouter.post("/restaurants", addProductEndpoint);

module.exports = { productRouter };
