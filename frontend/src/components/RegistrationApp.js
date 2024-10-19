import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import RegistrationList from './RegistrationList';
import './styles.css'

const RegistrationApp = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editingRegistration, setEditingRegistration] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/registrations');
      setRegistrations(response.data);
    } catch (error) {
      console.error('Error fetching registrations', error);
    }
  };

  const addRegistration = async (data) => {
    try {
      setErrorMessage(''); 
      setSuccessMessage(''); 

      const response = await axios.post('http://localhost:5000/api/registrations', data);
      setSuccessMessage(response.data.message);
      fetchRegistrations();
    } catch (error) {
      handleError(error);
    }
  };

  const updateRegistration = async (id, data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      const response = await axios.put(`http://localhost:5000/api/registrations/${id}`, data);
      setSuccessMessage(response.data.message);
      fetchRegistrations();
    } catch (error) {
      handleError(error);
    }
  };

  const deleteRegistration = async (id) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      const response = await axios.delete(`http://localhost:5000/api/registrations/${id}`);
      setSuccessMessage(response.data.message);
      fetchRegistrations();
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      setErrorMessage(error.response.data.error || 'An error occurred.');
    } else if (error.request) {
      setErrorMessage('No response from the server. Please try again later.');
    } else {
      setErrorMessage('Error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Registration Management</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <RegistrationForm
        onSubmit={editingRegistration ? updateRegistration : addRegistration}
        editingRegistration={editingRegistration}
        setEditingRegistration={setEditingRegistration}
      />

      <RegistrationList
        registrations={registrations}
        onDelete={deleteRegistration}
        onEdit={setEditingRegistration}
      />
    </div>
  );
};

export default RegistrationApp;
