const { addUser, getUsers } = require("../services/userService");

const getUsersEndpoint = async (req, res) => {
    const { success, user, error } = await getUsers();
    if (success) {
        res.status(200).json(user);
    } else {
        res.status(500).json({ error });
    }
};

const addUserEndpoint = async (req, res) => {
    const { name } = req.body;
    const { success, id, error } = await addShipment(name);
    if (success) {
        res.status(201).json(id);
    } else {
        res.status(500).json({ error });
    }
};

module.exports = {
    getUsersEndpoint,
    addUserEndpoint,
};
