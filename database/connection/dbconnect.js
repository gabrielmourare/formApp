const dbURI = process.env.MONGO_URI;
const mongoose = require('mongoose');


const connectDB = () => {
    try {
        mongoose.connect(dbURI);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connectDB
};