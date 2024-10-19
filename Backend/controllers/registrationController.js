const Registration = require('../models/registrationModel');

const create = (req, res) => {
    const data = req.body;
  
 
    if (!data.name || !data.email || !data.dob) {
      return res.status(400).json({ error: 'All fields (name, email, and date of birth) are required.' });
    }
  
    Registration.createRegistration(data, (err, result) => {
      if (err) {
       
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: 'Email already exists.' });
        }
        return res.status(500).json({ error: 'Database error. Please try again later.' });
      }
      res.status(201).json({ message: 'Registration successful!' });
    });
  };
  
  const update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
   
    if (!data.name || !data.email || !data.dob) {
      return res.status(400).json({ error: 'All fields (name, email, and date of birth) are required.' });
    }
  
    Registration.updateRegistration(id, data, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: 'Email already exists.' });
        }
        return res.status(500).json({ error: 'Database error. Please try again later.' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Registration not found.' });
      }
      res.status(200).json({ message: 'Registration updated successfully!' });
    });
  };
  
  const remove = (req, res) => {
    const id = req.params.id;
  
    Registration.deleteRegistration(id, (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error. Please try again later.' });
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Registration not found.' });
      }
      res.status(200).json({ message: 'Registration deleted successfully!' });
    });
  };
  

const getAll = (req, res) => {
    Registration.getAllRegistrations((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

const getById = (req, res) => {
    const id = req.params.id;
    Registration.getRegistrationById(id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (!result.length) return res.status(404).send('Registration not found');
        res.status(200).json(result[0]);
    });
};



module.exports = { create, getAll, getById, update, remove };
