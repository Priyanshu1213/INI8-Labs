const connection = require('../config/db');

const createRegistration = (data, callback) => {
    const query = 'INSERT INTO Registration (name, email, dob) VALUES (?, ?, ?)';
    connection.query(query, [data.name, data.email, data.dob], callback);
};

const getAllRegistrations = callback => {
    const query = 'SELECT * FROM Registration';
    connection.query(query, callback);
};

const getRegistrationById = (id, callback) => {
    const query = 'SELECT * FROM Registration WHERE id = ?';
    connection.query(query, [id], callback);
};

const updateRegistration = (id, data, callback) => {
    const query = 'UPDATE Registration SET name = ?, email = ?, dob = ? WHERE id = ?';
    connection.query(query, [data.name, data.email, data.dob, id], callback);
};

const deleteRegistration = (id, callback) => {
    const query = 'DELETE FROM Registration WHERE id = ?';
    connection.query(query, [id], callback);
};

module.exports = {
    createRegistration,
    getAllRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration
};
