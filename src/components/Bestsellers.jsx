import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const BestSellers = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

  const products = [
    {
      id: 1,
      name: "Classic Mixture",
      desc: "Crunchy & Spicy Blend",
      rating: 5,
      // price: "₹85",
      image: "/images/food10.png",
      color: "#FF6B35"
    },
    {
      id: 2,
      name: "Masala Bhujia",
      desc: "Traditional Taste",
      rating: 5,
      // price: "₹95",
      image: "/images/food11.png",
      color: "#4ECDC4"
    },
    {
      id: 3,
      name: "Spicy Chana",
      desc: "Roasted Perfection",
      rating: 5,
      // price: "₹75",
    image: "/images/food12.png",
      color: "#FFE66D"
    }
  ]

  const productVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -30
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  return (
    <div 
      ref={sectionRef}
      style={{
        background: 'radial-gradient(circle, #FFE34C 0%, #FFB900 100%)',
        minHeight: '100vh',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background blobs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #FFE34C 0%, #FFB900 100%)',
          borderRadius: '50%',
          opacity: 0.15,
          y: y,
          filter: 'blur(60px)'
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #F94144 0%, #FF6B6B 100%)',
          borderRadius: '50%',
          opacity: 0.12,
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          filter: 'blur(60px)'
        }}
      />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '80px',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <h2 style={{
              fontSize: '4rem',
              fontWeight: 700,
              color: '#000',
              fontFamily: "'Rowdies', cursive",
              marginBottom: '10px'
            }}>
              Best Sellers
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(0, 0, 0, 0.6)',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Most loved by our customers
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 30px',
              background: 'transparent',
              border: '2px solid #000',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#000'
            }}
          >
            View All <span style={{ fontSize: '1.2rem' }}>→</span>
          </motion.button>
        </motion.div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              variants={productVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '30px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Card background accent */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: product.color,
                  borderRadius: '50%',
                  filter: 'blur(40px)'
                }}
              />

              {/* Product Image */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  position: 'relative'
                }}
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '12px'
              }}>
                {[...Array(product.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                    style={{
                      fontSize: '1.2rem'
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Product Info */}
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#000',
                marginBottom: '8px',
                fontFamily: "'Rowdies', cursive"
              }}>
                {product.name}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.6)',
                marginBottom: '20px',
                fontFamily: "'Poppins', sans-serif"
              }}>
                {product.desc}
              </p>

              {/* Price and Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#000',
                  fontFamily: "'Rowdies', cursive"
                }}>
                  {product.price}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#F94144',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 20px rgba(249, 65, 68, 0.4)'
                  }}
                >
                  🛒
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            background: 'linear-gradient(135deg, #5D4037 0%, #3E2723 100%)',
            borderRadius: '32px',
            padding: '60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: '#FFE34C',
            borderRadius: '50%',
            opacity: 0.15
          }} />

          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '20px',
              fontFamily: "'Rowdies', cursive",
              lineHeight: 1.2
            }}>
              Not just any snacks.
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.8,
              marginBottom: '30px',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Our namkeen is crafted with premium ingredients, authentic spices, and traditional recipes passed down through generations. Every bite delivers the perfect crunch and flavor that keeps you coming back for more.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#FFB900' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '14px 32px',
                background: '#FFE34C',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Rowdies', cursive",
                boxShadow: '0 8px 25px rgba(255, 227, 76, 0.4)'
              }}
            >
              Explore More →
            </motion.button>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              height: '100%'
            }}
          >
            {products.map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  height: i === 0 ? '100%' : 'auto',
                  gridRow: i === 0 ? 'span 2' : 'auto'
                }}
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
      `}</style>
    </div>
  )
}

export default BestSellers