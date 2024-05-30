import React, { useEffect, useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import paint from './assets/paint.json';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://nipponpaint.free.beeceptor.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-content">
          <nav className="Header-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#order">Online Order</a></li>
              <li>
                <select onChange={(e) => window.location.href = e.target.value}>
                  <option value="#products" disabled selected>Products</option>
                  {!isLoading && products.map((product, index) => (
                    <option key={index} value={`#product-${index}`}>
                      {product}
                    </option>
                  ))}
                </select>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="Graph-section">
          <h2>Your destination for vibrant colors!</h2>
          <div className="Lottie-container">
            <Lottie animationData={paint} />
          </div>
        </section>
        <section className="About-section">
          <h2>About Us</h2>
          <p>Nippon Paint is a leading paint manufacturing company known for its wide range of high-quality and vibrant colors. We strive to bring color to life and make your world more beautiful.</p>
        </section>
        <section className="Products-section" id="products">
          <h2>Our Products</h2>
          <div className="Product-grid">
            <div className="Product-item" id="interior">
              <h3>Interior Paints</h3>
              <p>Discover our exquisite range of interior paints designed to transform your living spaces.</p>
            </div>
            <div className="Product-item" id="exterior">
              <h3>Exterior Paints</h3>
              <p>Protect and beautify your home with our durable and weather-resistant exterior paints.</p>
            </div>
            <div className="Product-item" id="specialty">
              <h3>Specialty Paints</h3>
              <p>Explore our specialty paints for unique finishes and effects.</p>
            </div>
          </div>
        </section>
        <section className="Contact-section" id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to contact us:</p>
          <p>Email: info@nipponpaint.com</p>
          <p>Phone: +94 119864122</p>
        </section>
      </main>
      <footer>
        <div className="Footer-social">
          <a href="https://www.facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /></a>
          <a href="https://www.twitter.com"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={{ width: '24px', height: '24px' }} /></a>
          <a href="https://www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '24px', height: '24px' }} /></a>
        </div>
        <p>&copy; 2024 Nippon Paint. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
