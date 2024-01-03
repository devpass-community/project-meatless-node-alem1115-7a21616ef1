const { Router } = require("express");
const { addShipmentEndpoint, getShipmentsEndpoint } = require("../controllers/shipmentController");

const shipmentRouter = Router();

shipmentRouter.get("/shipments", getShipmentsEndpoint);
shipmentRouter.post("/shipments", addShipmentEndpoint);

module.exports = { shipmentRouter };
