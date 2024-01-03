const { insertQuery, selectQuery } = require("../config/configDB");

const getOrders = async () => {
    const query = "SELECT * FROM Orders";

    try {
        const order = await selectQuery(query);
        return { success: true, order };
    } catch {
        return { succes: false, error };
    }
};

const addOrder = async (order) => {
    const { restaurant_id, subtotal, freight, total_price, user_id } = order;
    const query = `INSERT INTO Products (restaurant_id, subtotal, freight, total_price, user_id) VALUES ('${(restaurant_id, subtotal)}, ${freight}, ${total_price}, ${user_id});`;
    try {
        let id = await insertQuery(query);
        return { success: true, id };
    } catch {
        {
            success: false, error;
        }
    }
};

module.exports = {
    getOrders,
    addOrder,
};
