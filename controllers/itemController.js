// controllers/itemController.js
import Item from '../models/itemModel.js';

export const createItem = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;

    // Create the item document in MongoDB
    const newItem = await Item.create({
      name,
      description,
      price,
      category,
      quantity
    });

    // Respond with the created item
    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (error) {
    console.error("Error creating item:", error.message);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
