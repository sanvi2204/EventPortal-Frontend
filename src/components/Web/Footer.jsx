// import React from 'react';

// import './Footer.css';

// function Footer () {

//   return (
//     <section className="footer">
//       <hr className="footer-seperator" />
//       <section className="footer-social-media">
//         <a href="/" target="_blank" rel="noopener noreferrer">Good fortune is what happens when opportunity meets with planning.</a>
//       </section>
//       <section className="footer-info">
//         <section className="footer-info-left">
//           <section className="footer-info__name">
//               Spark Event 
//           </section>
//           <section className="footer-info__returns">
//             Returns Policy
//             <br />
//             Delivery
//           </section>        
//         </section>
//         <section className="footer-info-center">
//           <section className="footer-info__email">
//             sparkevent@gmail.com 
//           </section>
//           <section className="footer-info__terms">
//             Terms and Conditions
//             <br />
//             Copyright
//           </section>
//         </section>
//         <section className="footer-info-right">
//           <section className="footer-info__number">
//             Ph:044652865
//           </section>
//           <section className="footer-info__contact">
//             Privacy Policy 
//             <br />
//             Contact Us
//           </section>
//         </section>
//       </section>
//       <hr className="footer-seperator" />
//     </section>
//   )

// }

// export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="spark-event-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Spark Event</h3>
          <p>Igniting your special moments with unforgettable experiences.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Event Street, City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@sparkevent.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">LI</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Spark Event. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;