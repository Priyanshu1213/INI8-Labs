import React, { useState, useEffect } from 'react';
import './styles.css';

const RegistrationForm = ({ onSubmit, editingRegistration, setEditingRegistration }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');


  useEffect(() => {
    if (editingRegistration) {
      setName(editingRegistration.name);
      setEmail(editingRegistration.email);
      setDob(editingRegistration.dob);
    }
  }, [editingRegistration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, dob };
    if (editingRegistration) {
      onSubmit(editingRegistration.id, data);
      setEditingRegistration(null);
    } else {
      onSubmit(data);
    }
    setName('');
    setEmail('');
    setDob('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingRegistration ? 'Edit Registration' : 'Add Registration'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
       
      />
      <button type="submit">{editingRegistration ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default RegistrationForm;
