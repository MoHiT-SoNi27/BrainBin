const mongoose = require('mongoose');
MONGODB_URI="mongodb://localhost:27017/brainbin"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;