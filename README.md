# Registration Management System
This project is a full-stack application that allows users to register, update, delete, and list user registrations using a SQL database. It implements CRUD operations (Create, Read, Update, Delete) and includes error handling and validation. The project is built using a Node.js backend (with Express and MySQL) and a React frontend.

## Features
- SQL Database: The backend uses a MySQL database with a Registration table to store user details such as ID, Name, Email, and Date of Birth.
- CRUD Operations: Perform Create, Read, Update, and Delete operations on user registration data.
- Error Handling: Proper error handling and validation for each operation (e.g., duplicate emails, missing fields).
- Frontend: A responsive frontend built with React to interact with the backend.

## To run this project, you need the following software installed on your system:

Node.js (v14+)
MySQL (or any other SQL database)
npm (Node Package Manager)
Backend Setup
## Clone the repository
git clone https://github.com/yourusername/registration-management-system.git

## Install Backend Dependencies
- npm install



# Configure MySQL Database
- Create a MySQL database named registration_system.
- Inside the backend/config/db.js file, update the database connection details:

```
 const db = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'registration_system'
}); 
```

## Create the Registration Table
Run the following SQL command in your MySQL database to create the Registration table:

```
CREATE TABLE Registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  dob DATE NOT NULL
);
``` 

## Start the Backend Server
- cd backend
- npm start

## Start the Frontend Server
- cd frontend 
- npm start


## Start the backend and frontend servers:

- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:3000
  
Open the frontend in your browser and interact with the registration form to create, update, delete, and list user registrations.

## API Endpoints (Backend)
- POST /api/registrations - Create a new registration
- GET /api/registrations - Get all registrations
- PUT /api/registrations/:id - Update a registration by ID
- DELETE /api/registrations/:id - Delete a registration by ID
- Error Handling
- The backend sends meaningful error messages to the frontend for the following scenarios:

- Missing required fields (name, email, date of birth).
- Duplicate email addresses.
- Database errors.
- The frontend will display these error messages to the user as alerts or notifications.

Troubleshooting
Ensure the MySQL server is running and the database credentials are correct in backend/config/db.js.
If the frontend doesn’t start properly, make sure the backend server is running and accessible on http://localhost:5000.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Priyanshu (your GitHub link)
Feel free to reach out with any questions or issues!

