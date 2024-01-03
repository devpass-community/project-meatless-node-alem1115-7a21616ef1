const { Router } = require("express");
const { addOrderEndpoint, getOrdersEndpoint } = require("../controllers/orderController");

const orderRouter = Router();
productRouter.get("/products", getOrdersEndpoint);
productRouter.post("/products", addOrderEndpoint);

module.exports = { orderRouter };
