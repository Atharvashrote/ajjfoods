import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📷' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'WhatsApp', icon: '💬' }
  ]

  return (
    <footer style={{
      background: '#000',
      color: '#fff',
      padding: '80px 40px 30px',
      fontFamily: "'Rowdies', cursive",
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative blob */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, #FFE34C 0%, #FFB900 100%)',
        borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
        opacity: 0.15,
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '-80px',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, #FFE34C 0%, #FFB900 100%)',
        borderRadius: '60% 40% 40% 60% / 50% 50% 50% 50%',
        opacity: 0.1,
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Section */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#FFE34C',
              marginBottom: '20px',
              letterSpacing: '2px'
            }}>
              AAJFOODS
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '300px'
            }}>
              Bringing you the authentic taste of traditional namkeen with a modern twist. Made with love and fresh ingredients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              color: '#FFE34C',
              fontWeight: 600
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontFamily: "'Poppins', sans-serif"
            }}>
              {['Home', 'Menu', 'About Us', 'Contact', 'FAQs'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10, color: '#FFE34C' }}
                  style={{
                    marginBottom: '12px',
                    cursor: 'pointer',
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'color 0.3s ease',
                    fontSize: '1rem'
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              color: '#FFE34C',
              fontWeight: 600
            }}>
              Contact Us
            </h3>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              <p style={{ marginBottom: '12px' }}>
                📍 123 Snack Street, Food City, IN 440001
              </p>
              <p style={{ marginBottom: '12px' }}>
                📞 +91 98765 43210
              </p>
              <p style={{ marginBottom: '12px' }}>
                ✉️ hello@ajjfoods.com
              </p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '25px',
              color: '#FFE34C',
              fontWeight: 600
            }}>
              Stay Updated
            </h3>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              Subscribe to get special offers and updates!
            </p>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#FFE34C'
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05, background: '#FFB900' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '12px 24px',
                  background: '#FFE34C',
                  color: '#000',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Rowdies', cursive",
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FFE34C, transparent)',
            marginBottom: '40px'
          }}
        />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            © 2024 AAJFOODS. All rights reserved. Made with ❤️ in India
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '15px'
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFE34C'
                  e.currentTarget.style.borderColor = '#FFE34C'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
      `}</style>
    </footer>
  )
}

export default Footer