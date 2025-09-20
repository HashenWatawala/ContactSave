const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Body parsers (required for req.body to work!)
app.use(express.json()); // parses JSON
app.use(express.urlencoded({ extended: true })); // parses form data

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
