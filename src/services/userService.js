const { insertQuery, selectQuery } = require("../config/configDB");

const getUsers = async () => {
    const query = "SELECT * FROM Users";
    try {
        const user = await selectQuery(query);
        return { success: true, result: user };
    } catch {
        return {
            success: false,
            error,
        };
    }
};

const addUser = async (user) => {
    const { name } = user;
    const query = `INSERT INTO Users (name) VALUES ('${distance_km}, ${name});`;
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
    getUsers,
    addUser,
};
