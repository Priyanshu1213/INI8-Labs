const express = require('express');
const bodyParser = require('body-parser');
const registrationRoutes = require('./routes/registrationRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  
  app.use(cors(corsOptions));

dotenv.config();
app.use(bodyParser.json());

app.use('/api/registrations', registrationRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
