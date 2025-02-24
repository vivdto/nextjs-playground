import mongoose from "mongoose"; // Importing the mongoose library for MongoDB connection

// Fetching the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI!;

// Checking if the URI is provided; if not, throw an error
if (!MONGODB_URI) {
    throw new Error("Please define mongodb uri in env file");
}

// Using a global variable to cache the database connection
let cached = global.mongoose;

// If cached connection is not found, initialize it
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

// Function to establish a connection to MongoDB
export async function connectToDatabase() {
    // If a connection already exists, return it
    if (cached.conn) {
        return cached.conn;
    }

    // If no promise exists, create a new one for database connection
    if (!cached.promise) {
        const opts = {
            bufferCommands: true, // Ensures queries wait until DB is connected (default behavior)
            maxPoolSize: 10 // Maximum number of connections in the pool
        };

        // Establishing a connection and storing the promise in `cached.promise`
        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then(() => mongoose.connection);
    }

    try {
        // Await the connection promise and store the connection in `cached.conn`
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null; // Reset the promise in case of failure
        throw new Error("Check D'base File"); // Throw an error if the connection fails
    }

    return cached.conn; // Return the established connection
}
