const { insertQuery, selectQuery } = require("../config/configDB");

const getProducts = async () => {
    const query = "SELECT * FROM Products";
    try {
        const products = await selectQuery(query);
        return { success: true, products };
    } catch {
        return { succes: false, error };
    }
};

const addProduct = async (product) => {
    const { description, full_description, category, price, restaurant_id, active } = product;
    const query = `INSERT INTO Products (description, full description, category, price, restaurant_id, active) VALUES ('${description}', '${full_description}', '${category}', '${price}', '${restaurant_id}', ${active ? 1 : 0});`;
    try {
        let productId = await insertQuery(query);
        return { success: true, productId };
    } catch {
        {
            success: false, error;
        }
    }
};

module.exports = {
    getProducts,
    addProduct,
};
