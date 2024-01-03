const { Router } = require("express");
const { addUserEndpoint, getUsersEndpoint } = require("../controllers/userController");

const userRouter = Router();

shipmentRouter.get("/shipments", getUsersEndpoint);
shipmentRouter.post("/shipments", addUserEndpoint);

module.exports = { userRouter };
