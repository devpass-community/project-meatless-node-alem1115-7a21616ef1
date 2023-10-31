const { insertQuery, selectQuery } = require("../config/configDB");

async function addRestaurant(restaurant) {
    const { name, category, address, active } = restaurant;
    const query = `
        INSERT INTO Restaurants (name, category, address, active)
        VALUES ('${name}', '${category}', '${address}', ${active ? 1 : 0});
    `;
    try {
        const restaurantId = await insertQuery(query);
        return { success: true, restaurantId };
    } catch (error) {
        return { success: false, error };
    }
}

async function getRestaurants() {
    const query = "SELECT * FROM Restaurants WHERE active = 1;";
    try {
        const restaurants = await selectQuery(query);
        return { success: true, restaurants };
    } catch (error) {
        return { success: false, error };
    }
}

module.exports = {
    getRestaurants,
    addRestaurant,
};
