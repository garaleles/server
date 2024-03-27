require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', true);

const port= process.env.PORT || 5000;
const start = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};
 
start();


