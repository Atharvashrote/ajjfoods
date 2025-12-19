import React, { useState } from 'react'
import ProductPageNavbar from './Productnavbar';
import Footer from './Footer';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    product: '',
    name: '',
    email: '',
    mobile: '',
    enquiry: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
  }

  const handleCancel = () => {
    setFormData({
      product: '',
      name: '',
      email: '',
      mobile: '',
      enquiry: ''
    })
  }

  return (
    <div>


    <ProductPageNavbar />
    <div className="contact-container">
        
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="content-wrapper">
        {/* Left Side - Company Info */}
        <div className="company-info">
          <h1 className="company-name">Aajfoods & Co</h1>
          
          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Contact Person</h3>
              <p className="info-text">Mr. Aashish Arvindbhai Joshi</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Address</h3>
              <p className="info-text">
                706 Priti Paradise B Wing Chs Ltd, Dadabhai Cross Rd No 3, Vile Parle East, Mumbai, Maharashtra, India - 400057
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Call Us</h3>
              <p className="info-text">+91-9820438101</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Email</h3>
              <p className="info-text">aajfoods.co@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Web Address</h3>
              <p className="info-text">http://www.aajfoods.co.in</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Web Page</h3>
              <p className="info-text" style={{ fontSize: '0.85rem' }}>
                https://www.exportersindia.com/aajfoods-co/<br/>
                https://www.indianyellowpages.com/mumbai/aajfoods-co-vile-parle-east-mumbai-1975810/
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Product / Service Looking for <span className="required">*</span>
              </label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product / Service Looking for"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Mobile <span className="required">*</span>
              </label>
              <div className="mobile-input-group">
                <select className="country-code">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+971</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="form-input mobile-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Enquiry Details <span className="required">*</span>
              </label>
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Your Requirement"
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
              <button type="button" onClick={handleCancel} className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </form>
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
        
        .contact-container {
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
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          position: relative;
          z-index: 10;
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Company Info Styles */
        .company-info {
          animation: slideInLeft 0.8s ease-out;
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .company-name {
          font-size: 3rem;
          font-weight: 800;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 40px;
          letter-spacing: -1px;
        }
        
        .info-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .info-item:nth-child(2) { animation-delay: 0.1s; }
        .info-item:nth-child(3) { animation-delay: 0.2s; }
        .info-item:nth-child(4) { animation-delay: 0.3s; }
        .info-item:nth-child(5) { animation-delay: 0.4s; }
        .info-item:nth-child(6) { animation-delay: 0.5s; }
        .info-item:nth-child(7) { animation-delay: 0.6s; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .icon-circle {
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: #D32F2F;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
        
        .info-content {
          flex: 1;
        }
        
        .info-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 5px;
        }
        
        .info-text {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }
        
        /* Form Styles */
        .form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.8);
          animation: slideInRight 0.8s ease-out;
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 8px;
        }
        
        .required {
          color: #D32F2F;
        }
        
        .form-input {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          background: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #FFB900;
          box-shadow: 0 0 0 3px rgba(255, 185, 0, 0.1);
        }
        
        .form-input::placeholder {
          color: #999;
        }
        
        .mobile-input-group {
          display: flex;
          gap: 10px;
        }
        
        .country-code {
          width: 100px;
          padding: 14px 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .country-code:focus {
          outline: none;
          border-color: #FFB900;
          box-shadow: 0 0 0 3px rgba(255, 185, 0, 0.1);
        }
        
        .mobile-input {
          flex: 1;
        }
        
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          resize: vertical;
          transition: all 0.3s ease;
          background: white;
        }
        
        .form-textarea:focus {
          outline: none;
          border-color: #FFB900;
          box-shadow: 0 0 0 3px rgba(255, 185, 0, 0.1);
        }
        
        .form-textarea::placeholder {
          color: #999;
        }
        
        .button-group {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }
        
        .btn {
          padding: 14px 40px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .btn-submit {
          background: #D32F2F;
          color: white;
          flex: 1;
          box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
        
        .btn-submit:hover {
          background: #B71C1C;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
        }
        
        .btn-cancel {
          background: #D32F2F;
          color: white;
          flex: 1;
          box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
        
        .btn-cancel:hover {
          background: #B71C1C;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
        }
        
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .company-name {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-container {
            padding: 40px 4%;
          }
          
          .form-container {
            padding: 30px 20px;
          }
          
          .button-group {
            flex-direction: column;
          }
          
          .mobile-input-group {
            flex-direction: column;
          }
          
          .country-code {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactForm