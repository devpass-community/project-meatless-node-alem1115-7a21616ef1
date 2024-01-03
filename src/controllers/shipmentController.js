const { addShipment, getShipments } = require("../services/shipmentService");

const getShipmentsEndpoint = async (req, res) => {
    const { success, shipment, error } = await getShipments();
    if (success) {
        res.status(200).json(shipment);
    } else {
        res.status(500).json({ error });
    }
};

const addShipmentEndpoint = async (req, res) => {
    const { distance_km, price } = req.body;
    const { success, id, error } = await addProduct(distance_km, price);
    if (success) {
        res.status(201).json(id);
    } else {
        res.status(500).json({ error });
    }
};

module.exports = {
    getShipmentsEndpoint,
    addShipmentEndpoint,
};
