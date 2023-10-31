const { addRestaurant, getRestaurants } = require("../services/restaurantService");

const getRestaurantsEndpoint = async (req, res) => {
    try {
        const { success, restaurants, error } = await getRestaurants();
        if (success) {
            res.status(200).json(restaurants);
        } else {
            res.status(500).json({ error });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addRestaurantEndpoint = async (req, res) => {
    try {
        const { name, category, address, active } = req.body;
        const { success, restaurantId, error } = await addRestaurant({ name, category, address, active });
        if (success) {
            res.status(201).json({ restaurantId });
        } else {
            res.status(500).json({ error });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getRestaurantsEndpoint,
    addRestaurantEndpoint,
};
