const { insertQuery, selectQuery } = require("../config/configDB");

const getShipments = async () => {
    const query = "SELECT * FROM Shipments";
    try {
        const shipment = await selectQuery(query);
        return { success: true, result: shipment };
    } catch {
        return {
            success: false,
            error,
        };
    }
};

const addShipment = async (shipment) => {
    const { distance_km, price } = shipment;
    const query = `INSERT INTO Products (distance_km, price) VALUES ('${distance_km}, ${price});`;
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
    getShipments,
    addShipment,
};
