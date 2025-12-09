import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTruck } from 'react-icons/fa';
import './BookPage.css';

const BookPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showCODForm, setShowCODForm] = useState(false);
  const [codDetails, setCodDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const bookPrice = 699;
  const totalAmount = bookPrice * quantity;

  const handleInputChange = (e) => {
    setCodDetails({
      ...codDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCODOrder = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!codDetails.name || !codDetails.email || !codDetails.phone || !codDetails.address) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would send the order to your backend
    console.log('COD Order:', {
      ...codDetails,
      quantity,
      amount: totalAmount,
      paymentMethod: 'Cash on Delivery'
    });

    alert(`Order placed successfully!\n\nOrder Details:\nName: ${codDetails.name}\nQuantity: ${quantity}\nTotal: ₹${totalAmount}\n\nYou will receive a confirmation email shortly. Payment will be collected on delivery.`);
    
    // Reset form
    setShowCODForm(false);
    setCodDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    });
  };

  return (
    <div className="book-page">
      <section className="page-hero book-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">THE BIOGRAPHY</h1>
            <p className="page-subtitle">
              The complete story of India's desert hero — now in print
            </p>
          </motion.div>
        </div>
      </section>

      <section className="book-content paper-texture">
        <div className="container">
          {/* Main Book Section */}
          <div className="book-main">
            <motion.div 
              className="book-cover-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="book-3d-large">
                <div className="book-front-large">
                  <div className="book-title-large">
                    <h2>RANCHORDAS PAGI</h2>
                    <p>The Desert Scout Who Helped India Win</p>
                    <div className="book-badge-large">NATIONAL BESTSELLER</div>
                  </div>
                </div>
                <div className="book-spine-large"></div>
              </div>

            </motion.div>

            <motion.div 
              className="book-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>A Story That Must Be Told</h2>
              <p className="book-description-large">
                This meticulously researched biography brings to life the extraordinary journey of 
                Ranchordas Pagi—from a humble desert dweller to a national hero whose courage and 
                knowledge helped India secure victory in two major wars.
              </p>

              <div className="book-specs">
                <div className="spec">
                  <strong>Pages:</strong> 420
                </div>
                <div className="spec">
                  <strong>Publisher:</strong> Heritage Books India
                </div>
                <div className="spec">
                  <strong>Language:</strong> English & Hindi
                </div>
                <div className="spec">
                  <strong>ISBN:</strong> 978-93-XXXXX-XX-X
                </div>
                <div className="spec">
                  <strong>Format:</strong> Hardcover, Paperback, eBook
                </div>
                <div className="spec">
                  <strong>Release:</strong> January 26, 2026
                </div>
              </div>

              <div className="pricing-section">
                <div className="price-box">
                  <span className="original-price">₹999</span>
                  <span className="current-price">₹699</span>
                  <span className="discount-badge">Save 30%</span>
                </div>
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="coming-soon-section">
                <div className="coming-soon-badge">
                  <span className="badge-icon">📚</span>
                  <h3>Coming Soon</h3>
                  <p>Pre-orders will open on January 1, 2026</p>
                </div>
                <p className="coming-soon-text">
                  We're putting the finishing touches on this incredible biography. 
                  Sign up below to be notified when pre-orders begin!
                </p>
                <button className="btn-secondary btn-large notify-btn">
                  Notify Me When Available
                </button>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* COD Order Form Modal */}
      {showCODForm && (
        <div className="order-modal" onClick={() => setShowCODForm(false)}>
          <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowCODForm(false)}>×</button>
            <h2>Cash on Delivery Order</h2>
            <p className="modal-subtitle">Fill in your details for COD delivery</p>
            
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p><strong>Book:</strong> Ranchordas Pagi Biography</p>
              <p><strong>Quantity:</strong> {quantity}</p>
              <p><strong>Price per book:</strong> ₹{bookPrice}</p>
              <p className="total"><strong>Total Amount:</strong> ₹{totalAmount}</p>
              <p className="cod-note">Pay cash when you receive the book</p>
            </div>

            <form className="order-form" onSubmit={handleCODOrder}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={codDetails.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={codDetails.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={codDetails.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Delivery Address *</label>
                <textarea
                  name="address"
                  value={codDetails.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Enter your complete delivery address"
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={codDetails.city}
                    onChange={handleInputChange}
                    required
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={codDetails.state}
                    onChange={handleInputChange}
                    required
                    placeholder="State"
                  />
                </div>
                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={codDetails.pincode}
                    onChange={handleInputChange}
                    required
                    placeholder="Pincode"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary btn-large">
                <FaTruck /> Place COD Order
              </button>
            </form>

            <p className="payment-note">
               Free delivery | Pay cash on delivery
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPage;
