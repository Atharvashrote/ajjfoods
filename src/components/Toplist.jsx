import React from 'react'
import { motion } from 'framer-motion'

const TopList = () => {
  const snacks = [
    {
      id: 1,
      name: "Mixture Magic",
      desc: "Spicy blend with peanuts and sev",
      // price: "₹85",
      image: "/images/food9.png"
    },
    {
      id: 2,
      name: "Bhujia Bonanza",
      desc: "Crispy and tangy traditional taste",
      // price: "₹120",
      image: "/images/food8.png"
    },
    {
      id: 3,
      name: "Chana Crunch",
      desc: "Roasted chickpeas with masala",
      // price: "₹95",
      image: "/images/food5.JPEG"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  return (
    <div style={{
      background: 'radial-gradient(circle, #FFE34C 0%, #FFB900 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Rowdies', cursive"
    }}>
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: '#000',
        borderRadius: '50%',
        opacity: 0.1,
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '150px',
        height: '150px',
        background: '#000',
        borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
        opacity: 0.08,
        zIndex: 0
      }} />

      {/* Header */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 10,
          delay: 0.1
        }}
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          zIndex: 1
        }}
      >
        <h2 style={{
          fontSize: '49px',
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0.85)',
          marginBottom: '8px',
          letterSpacing: '2px'
        }}>
          Top List
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(0, 0, 0, 0.6)',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400
        }}>
          Our mainstay menu
        </p>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1200px',
          zIndex: 1
        }}
      >
        {snacks.map((snack, index) => (
          <motion.div
            key={snack.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '24px',
              padding: '20px',
              width: '280px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Card shine effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shine 3s infinite',
              pointerEvents: 'none'
            }} />

            {/* Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
              style={{
                width: '180px',
                height: '180px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
              }}
            >
              <img 
                src={snack.image}
                alt={snack.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>

            {/* Text Content */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#000',
              marginBottom: '8px',
              fontFamily: "'Rowdies', cursive"
            }}>
              {snack.name}
            </h3>
            
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(0, 0, 0, 0.7)',
              marginBottom: '16px',
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.4'
            }}>
              {snack.desc}
            </p>

            {/* Price and Button */}
            {/* <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px'
            }}>
              <span style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#000'
              }}>
                {snack.price}
              </span>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: '#F94144',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(249, 65, 68, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                +
              </motion.button>
            </div> */}
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        @keyframes shine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }
      `}</style>
    </div>
  )
}

export default TopList