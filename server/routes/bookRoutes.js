const express = require('express');
const router = express.Router();

// Book information
const bookInfo = {
  title: 'Ranchordas Pagi: The Desert Scout Who Helped India Win',
  author: 'Dr. Anil Mehta',
  isbn: '978-93-XXXXX-XX-X',
  pages: 420,
  publisher: 'Heritage Books India',
  releaseDate: '2026-01-26',
  languages: ['English', 'Hindi'],
  formats: [
    {
      type: 'Hardcover',
      price: 699,
      originalPrice: 999,
      discount: 30,
      available: true,
      stock: 500
    },
    {
      type: 'Paperback',
      price: 499,
      originalPrice: 699,
      discount: 29,
      available: true,
      stock: 1000
    },
    {
      type: 'eBook',
      price: 299,
      originalPrice: 499,
      discount: 40,
      available: true,
      stock: 9999
    }
  ],
  description: 'This meticulously researched biography brings to life the extraordinary journey of Ranchordas Pagi—from a humble desert dweller to a national hero whose courage and knowledge helped India secure victory in two major wars.',
  features: [
    '400+ pages of comprehensive biography',
    '50+ rare photographs',
    'Detailed desert route maps',
    'Veteran interviews',
    'Historical accuracy based on army records'
  ]
};

// GET book information
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: bookInfo
  });
});

// GET book pricing
router.get('/pricing', (req, res) => {
  res.json({
    success: true,
    data: bookInfo.formats
  });
});

// Check stock availability
router.post('/check-stock', (req, res) => {
  const { format, quantity } = req.body;
  
  const bookFormat = bookInfo.formats.find(f => f.type === format);
  
  if (!bookFormat) {
    return res.status(404).json({
      success: false,
      message: 'Book format not found'
    });
  }
  
  const available = bookFormat.stock >= quantity;
  
  res.json({
    success: true,
    available,
    stock: bookFormat.stock,
    message: available ? 'In stock' : 'Out of stock'
  });
});

module.exports = router;
