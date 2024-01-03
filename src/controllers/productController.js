const { addProduct, getProducts } = require("../services/productService");

const getProductsEndpoint = async (req, res) => {
    const { success, products, error } = await getProducts();
    if (success) {
        res.status(200).json(products);
    } else {
        res.status(500).json({ error });
    }
};

const addProductEndpoint = async (req, res) => {
    const { description, full_description, category, price, restaurant_id, active } = req.body;
    const { success, productId, error } = await addProduct(description, full_description, category, price, restaurant_id, active);
    if (success) {
        res.status(200).json(productId);
    } else {
        res.status(500).json({ error });
    }
};

module.exports = {
    getProductsEndpoint,
    addProductEndpoint,
};

/*const getRestaurantsEndpoint = async (req, res) => {
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
}; */
