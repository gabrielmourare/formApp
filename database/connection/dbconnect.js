const dbURI = process.env.MONGO_URI;
const mongoose = require('mongoose');

try {
    mongoose.connect(dbURI);
} catch (error) {
    console.log(error);
}
