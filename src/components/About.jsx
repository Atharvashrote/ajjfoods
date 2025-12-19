import React from 'react'
import ProductPageNavbar from './Productnavbar';
import Footer from './Footer';

const AboutUs = () => {
  console.log('Rendering AboutUs')
  return (
<div>
     <ProductPageNavbar />
    <div className="about-container">

       
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="content-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">About Us</h1>
         
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Text Content */}
          <div className="text-content">
            <div className="content-card">
              <p className="paragraph">
                Aajfoods & Co. is a famous name from Mumbai (Maharashtra), which is recognized as a credible manufacturer and supplier (wholesaler & trader) of different kinds of munchies and food products. We excel in providing fresh and premium quality sprouts, chivda, chakli, gathiya namkeen, mix namkeen, bhakarvadi & samosa, sev namkeen, bhel & puri, wafers, soya papdi, masala boondi, cheese balls, wheel fryums, banana chips, and tomato triangles. All these products are made using the finest ingredients, which our quality experts handpick with their sheer skills as well as using hi-tech equipment. Our food products taste great and have a long shelf life too. We make these munchies and food products available in good quality packaging materials to keep them safe for human consumption.
              </p>

              <p className="paragraph">
                Located in Mumbai (Maharashtra, India), Aajfoods & Co. is known for offering the finest food products that excel in taste and overall quality. The quality of these food products is checked on several parameters by our experts. Established in 2012, our company has made a positive reputation in the market over a period of time. Mr. Aashish Arvindbhai Joshi is the founder of the organization.
              </p>

              <div className="team-section">
                <h2 className="section-title">Team</h2>
                <p className="paragraph">
                  Aajfoods & Co. is blessed to have a team of dedicated professionals, who have expertise in their designated jobs. They make sure that all the tasks that they perform are executed with perfection. Our staff members are backed by years of experience. Our staff consists of qualified procurement agents, quality experts, packers, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card card-ceo">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="card-title">Name of CEO</h3>
              <p className="card-value">Mr. Aashish Arvindbhai Joshi</p>
            </div>

            <div className="info-card card-year">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="card-title">Year of Establishment</h3>
              <p className="card-value">2012</p>
            </div>

            <div className="info-card card-location">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="card-title">Location</h3>
              <p className="card-value">Mumbai, Maharashtra</p>
            </div>

            <div className="info-card card-products">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="card-title">Products</h3>
              <p className="card-value">Munchies & Snacks</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="features-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Quality Products</h3>
              <p className="feature-text">Made with finest ingredients handpicked by our experts</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3 className="feature-title">Hi-Tech Equipment</h3>
              <p className="feature-text">Using modern technology for production</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3 className="feature-title">Quality Packaging</h3>
              <p className="feature-text">Safe packaging materials for human consumption</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-text">Dedicated professionals with years of experience</p>
            </div>
          </div>
        </div>
       
      </div>
     
      </div>
        <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .about-container {
          background: radial-gradient(circle, #FFE34C 0%, #FFB900 100%);
          min-height: 100vh;
          padding: 60px 5%;
          position: relative;
          overflow: hidden;
        }
        
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s ease-in-out infinite;
          pointer-events: none;
        }
        
        .blob-1 {
          top: 10%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #FFE34C 0%, #FFB900 100%);
          opacity: 0.15;
        }
        
        .blob-2 {
          bottom: 15%;
          left: -5%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #F94144 0%, #FF6B6B 100%);
          opacity: 0.12;
          animation-delay: 5s;
        }
        
        .blob-3 {
          top: 50%;
          right: 20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #4ECDC4 0%, #44A08D 100%);
          opacity: 0.1;
          animation-delay: 10s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        
        /* Header Section */
        .header-section {
          margin-bottom: 50px;
          animation: fadeInDown 0.8s ease-out;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }
        
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          display: inline-flex;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .breadcrumb-item {
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.6);
        }
        
        .breadcrumb-item.active {
          color: #000;
          font-weight: 700;
        }
        
        .breadcrumb-separator {
          color: rgba(0, 0, 0, 0.4);
          font-size: 1.2rem;
        }
        
        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .text-content {
          animation: slideInLeft 0.8s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .content-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.8);
        }
        
        .paragraph {
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.75);
          font-family: 'Inter', sans-serif;
          margin-bottom: 25px;
          text-align: justify;
        }
        
        .team-section {
          margin-top: 35px;
          padding-top: 35px;
          border-top: 2px solid rgba(0, 0, 0, 0.1);
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 20px;
        }
        
        /* Info Cards */
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: slideInRight 0.8s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .info-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .card-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .card-ceo .card-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-year .card-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .card-location .card-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .card-products .card-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.6);
          font-family: 'Inter', sans-serif;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .card-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
          line-height: 1.4;
        }
        
        /* Features Section */
        .features-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.8);
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .features-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #000;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .feature-card {
          text-align: center;
          padding: 25px;
          background: rgba(255, 227, 76, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          background: rgba(255, 227, 76, 0.2);
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 10px;
        }
        
        .feature-text {
          font-size: 0.95rem;
          color: rgba(0, 0, 0, 0.7);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }
        
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-container {
            padding: 40px 4%;
          }
          
          .content-card,
          .features-section {
            padding: 25px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutUs