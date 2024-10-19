import React from 'react';
import './styles.css';

const RegistrationList = ({ registrations, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Registered Users</h2>
      {registrations.length === 0 ? (
        <p>No registrations found</p>
      ) : (
        <ul>
          {registrations.map((registration) => (
            <li key={registration.id}>

              <li>{registration.name}</li>
              <li>{registration.email}</li>
              <li>{registration.dob}</li> 
              <button onClick={() => onEdit(registration)}>Edit</button>
              <button onClick={() => onDelete(registration.id)} style={{background:"red", }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegistrationList;
