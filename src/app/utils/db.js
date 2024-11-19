import mongoose from "mongoose";

let isConnected = false;

export const connectToMongo = async () => {
    console.log('Attempting to connect to MongoDB...');
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;  // Exit if already connected
    }

    try {
        // Replace <fiSN5i5PEkcC9BGd> with your actual password
        const mongoUrl = "mongodb+srv://sara:fiSN5i5PEkcC9BGd@cluster0.p6i71.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0";

        // Log the MongoDB URL (avoid doing this in production with sensitive data)
        console.log("Connecting to MongoDB with URL:", mongoUrl);

        // Connect to MongoDB
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // After successful connection
        isConnected = true;
        console.log("MongoDB connected successfully");

        // Optionally listen to connection events
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to MongoDB');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err.message);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit the process with an error code
    }
};
