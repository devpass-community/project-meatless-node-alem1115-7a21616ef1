const { Router } = require("express");
const { addOrderEndpoint, getOrdersEndpoint } = require("../controllers/orderController");

const orderRouter = Router();
productRouter.get("/orders", getOrdersEndpoint);
productRouter.post("/orders", addOrderEndpoint);

module.exports = { orderRouter };
