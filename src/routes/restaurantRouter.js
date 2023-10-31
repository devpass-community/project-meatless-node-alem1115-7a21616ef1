const express = require("express");
const { getRestaurantsEndpoint, addRestaurantEndpoint } = require("../controllers/restaurantController");

const router = express.Router();

router.get("/restaurants", getRestaurantsEndpoint);
router.post("/restaurants", addRestaurantEndpoint);

module.exports = { restaurantRouter };
