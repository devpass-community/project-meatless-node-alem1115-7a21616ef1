const { addOrder, getOrders } = require("../services/orderService");

const getOrdersEndpoint = async (req, res) => {
    const { success, order, error } = await getOrders();
    if (success) {
        res.status(200).json(order);
    } else {
        res.status(500).json({ error });
    }
};

const addOrderEndpoint = async (req, res) => {
    const { restaurant_id, subtotal, freight, total_price, user_id } = req.body;
    const { success, id, error } = await addOrder(restaurant_id, subtotal, freight, total_price, user_id);
    if (success) {
        res.status(201).json(id);
    } else {
        res.status(500).json({ error });
    }
};

module.exports = {
    getOrdersEndpoint,
    addOrderEndpoint,
};
