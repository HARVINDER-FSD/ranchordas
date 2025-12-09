# Ranchordas Pagi Backend API

Backend server for the Ranchordas Pagi tribute website with book ordering and payment integration.

## Features

- ✅ Book information API
- ✅ Order management system
- ✅ Razorpay payment integration (for Indian payments)
- ✅ Email notifications (order confirmations)
- ✅ Contact form handling
- ✅ MongoDB database
- ✅ RESTful API design

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the server directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ranchordas-pagi
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=admin@ranchordaspagi.in
FRONTEND_URL=http://localhost:3000
```

### 3. Setup MongoDB

Install MongoDB locally or use MongoDB Atlas (cloud):

**Local MongoDB:**
```bash
# Install MongoDB
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB
mongod
```

**MongoDB Atlas (Cloud):**
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in .env

### 4. Setup Razorpay (Payment Gateway)

1. Sign up at https://razorpay.com
2. Get API keys from Dashboard
3. Add keys to .env file

### 5. Setup Email (Gmail)

1. Enable 2-factor authentication on Gmail
2. Generate App Password:
   - Go to Google Account settings
   - Security → App passwords
   - Generate password for "Mail"
3. Add to .env file

### 6. Start Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on http://localhost:5000

## API Endpoints

### Books

- `GET /api/books/info` - Get book information
- `GET /api/books/pricing` - Get pricing details
- `POST /api/books/check-stock` - Check stock availability

### Orders

- `POST /api/orders/create-razorpay-order` - Create payment order
- `POST /api/orders/verify-payment` - Verify payment
- `POST /api/orders/create` - Create new order
- `GET /api/orders/:orderId` - Get order details
- `PATCH /api/orders/:orderId/status` - Update order status

### Contact

- `POST /api/contact/submit` - Submit contact form

### Health Check

- `GET /api/health` - Check API status

## Testing the API

### Using cURL

```bash
# Get book info
curl http://localhost:5000/api/books/info

# Check stock
curl -X POST http://localhost:5000/api/books/check-stock \
  -H "Content-Type: application/json" \
  -d '{"format":"Hardcover","quantity":2}'
```

### Using Postman

Import the API endpoints and test each route.

## Database Schema

### Order Model

```javascript
{
  orderId: String (unique),
  customerInfo: {
    name, email, phone, address
  },
  bookDetails: {
    title, quantity, price, format
  },
  payment: {
    method, status, transactionId, amount
  },
  orderStatus: String,
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Notes

- Never commit .env file
- Use environment variables for sensitive data
- Implement rate limiting in production
- Add authentication for admin routes
- Use HTTPS in production

## Deployment

### Heroku

```bash
heroku create ranchordas-pagi-api
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set RAZORPAY_KEY_ID=your_key
# ... set other env variables
git push heroku main
```

### Vercel/Railway

Follow platform-specific deployment guides.

## Support

For issues or questions:
- Email: info@ranchordaspagi.in
- Check logs: `npm run dev` shows detailed errors

## License

MIT License - Ranchordas Pagi Memorial Foundation
