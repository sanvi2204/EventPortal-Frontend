

//       <main>
//         <section className="hero">
//           <h1>Create Unforgettable Events</h1>
//           <p>From concept to execution, we bring your vision to life</p>
//           <button className="cta-button">Plan Your Event</button>
//         </section>

//         <section className="services" id="services">
//           <h2>Our Services</h2>
//           <div className="service-grid">
//             <div className="service-card">
//               <img src="" alt="Wedding Planning" />
//               <h3>Wedding Planning</h3>
//               <p>Create the wedding of your dreams with our expert planners.</p>
//             </div>
//             <div className="service-card">
//               <img src="https://via.placeholder.com/150" alt="Corporate Events" />
//               <h3>Corporate Events</h3>
//               <p>Impress your clients and motivate your team with our corporate event services.</p>
//             </div>
//             <div className="service-card">
//               <img src="https://via.placeholder.com/150" alt="Birthday Parties" />
//               <h3>Birthday Parties</h3>
//               <p>Celebrate in style with our custom birthday party planning.</p>
//             </div>
//           </div>
//         </section>

//         <section className="testimonials">
//           <h2>What Our Clients Say</h2>
//           <div className="testimonial-grid">
//             <div className="testimonial-card">
//               <p>"EventMaster made our wedding day absolutely perfect. We couldn't be happier!"</p>
//               <h4>- Sarah & John</h4>
//             </div>
//             <div className="testimonial-card">
//               <p>"Our company retreat was a huge success thanks to the EventMaster team."</p>
//               <h4>- Mark, CEO of TechCorp</h4>
//             </div>
//           </div>
//         </section>

//         <section className="cta">
//           <h2>Ready to Plan Your Next Event?</h2>
//           <p>Contact us today and let's create something amazing together!</p>
//           <button className="cta-button">Get Started</button>
//         </section>
//       </main>
   
//   );
// };

import React from 'react';
import "./EventShowCase.css";

export const Home = () => {
  return (
    <div className="home-container">
      
      <div className="main-content">
        <div className="hero-section" style={{ backgroundImage: 'url(https://pearleventsaustin.com/wp-content/uploads/2021/03/Home-Page.jpg)' }}>
        
        </div>
        <div>
          <h2>
            OUR SERVICES 
          </h2>
        </div>
        <div class="event-categories">
         
  <div class="category">
  <img src="https://pearleventsaustin.com/wp-content/uploads/2023/03/wedding-tile-edit.jpg" alt="Social" onclick="handleClick('social')"></img>
    <h2 onclick="handleClick('weddings')">WEDDINGS</h2>
  </div>
  
  <div class="category">
  <img src="https://pearleventsaustin.com/wp-content/uploads/2023/01/corporate-tile.jpg" alt="Social" onclick="handleClick('social')"></img>
    <h2 onclick="handleClick('corporate')">CORPORATE</h2>
  </div>
  
  <div class="category">
    <img src="https://pearleventsaustin.com/wp-content/uploads/2023/01/social-tile.jpg" alt="Social" onclick="handleClick('social')"></img>
    <h2 onclick="handleClick('social')">SOCIAL</h2>
  </div>
</div>
<div className="about-section">
          <h2>About Us</h2>
          <p>Spark Events is dedicated to creating extraordinary experiences that leave lasting impressions...</p>
        </div>
<script>
{ function handleClick(category) {
  // Add your logic here for what should happen when an image or text is clicked
  console.log('Clicked on:', category);
} }
</script>


        <div className="contact-section">
          
          <p>Get in touch to start planning your perfect event!</p>
          <button>Contact Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;