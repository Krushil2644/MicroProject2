// routes/itemRoutes.js
import express from 'express';
import { createItem } from '../controllers/itemController.js';

const router = express.Router();

// Map a POST request to the createItem controller function
router.post('/', createItem);

export default router;
