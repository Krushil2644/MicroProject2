// models/itemModel.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item name is required'],
    trim: true,
    minlength: [3, 'Item name must be at least 3 characters long']
  },
  description: {
    type: String,
    required: [true, 'Item description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Item price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Item category is required'],
    trim: true
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, 'Quantity cannot be negative']
  }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
export default Item;
