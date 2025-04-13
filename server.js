// server.js
import dotenv from 'dotenv';
dotenv.config(); // Must be at the very top

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/database.js';
import itemRoutes from './routes/itemRoutes.js';

// Optional: Set strictQuery to suppress deprecation warning
mongoose.set('strictQuery', false);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for JSON body parsing
app.use(express.json());

// Mount API routes
app.use('/api/items', itemRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the MEN CRUD Application');
});

// Start the server on PORT from .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
