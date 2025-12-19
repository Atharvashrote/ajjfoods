import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPageNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const formatCategory = (category) => {
    return category.toLowerCase().replace(/\s+/g, '-')
  }

  const productCategories = {
    product1: ['Salty Snacks', 'Sweet Snacks', 'Spicy Mix'],
    product2: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    product3: ['Corn Chips', 'Potato Chips', 'Rice Chips'],
    product4: ['Peanut Chikki', 'Sesame Chikki', 'Mixed Chikki'],
    product5: ['Butter Biscuits', 'Cream Biscuits', 'Tea Biscuits']
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
        setActiveProduct(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
    setActiveProduct(null)
  }

  const handleProductClick = (productId) => {
    setActiveProduct(activeProduct === productId ? null : productId)
  }

  const handleCategoryClick = (product, category) => {
    console.log(`Navigate to: /snackproductlist?product=${product}&category=${formatCategory(category)}`)
    // Add your navigation logic here
  }

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }} ref={dropdownRef}>
      <nav style={{
        background: '#000000',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        height: '70px',
        fontFamily: "'Poppins', sans-serif",
        width: '100%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img 
            src='./images/logo.png' 
            alt="Logo" 
            style={{ height: '50px', width: 'auto' }}
          />
        </div>

        <ul style={{
          display: 'flex',
          gap: '45px',
          listStyle: 'none',
          fontSize: '16px',
          padding: 0,
          margin: 0,
          alignItems: 'center'
        }}>
          <li>
            <button
              onClick={() => navigate('/about')}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f9c74f'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              About
            </button>
          </li>
          
          <li style={{ position: 'relative' }}>
            <button 
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.3s',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                fontFamily: "'Poppins', sans-serif"
              }}
              onClick={(e) => {
                e.preventDefault()
                toggleDropdown()
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f9c74f'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              Products
              <span style={{ 
                transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)', 
                transition: 'transform 0.3s ease', 
                display: 'inline-block', 
                fontSize: '14px' 
              }}>
                ▼
              </span>
            </button>
          </li>
          
          <li>
            <a 
              href="#clients" 
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#f9c74f'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Our Clients
            </a>
          </li>
          
          <li>
            <a 
              href="#shop" 
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#f9c74f'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Quality Assurance
            </a>
          </li>
          
          <li>
            <button
              onClick={() => navigate('/contact')}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f9c74f'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Cart and Wishlist Icons */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <div style={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <span style={{ fontSize: '28px' }}>❤️</span>
            <span style={{ 
              position: 'absolute', 
              top: '-8px', 
              right: '-8px', 
              background: '#ef4444', 
              color: 'white', 
              fontSize: '11px', 
              fontWeight: 'bold', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 2px 8px rgba(239,68,68,0.4)' 
            }}>
              0
            </span>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <span style={{ fontSize: '28px' }}>🛒</span>
            <span style={{ 
              position: 'absolute', 
              top: '-8px', 
              right: '-8px', 
              background: '#f9c74f', 
              color: '#000', 
              fontSize: '11px', 
              fontWeight: 'bold', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 2px 8px rgba(249,199,79,0.4)' 
            }}>
              0
            </span>
          </div>
        </div>
      </nav>
      
      {showDropdown && (
        <div 
          style={{
            position: 'absolute',
            top: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999
          }}
        >
          <ul style={{
            background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
            padding: '12px 8px',
            listStyle: 'none',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            width: '240px',
            minWidth: '240px',
            margin: 0,
            border: '1px solid #374151'
          }}>
            {/* Indian Snacks & Namkeens */}
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product1')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 24px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                  e.currentTarget.style.color = '#f9c74f'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span>Indian Snacks & Namkeens</span>
                <span style={{ 
                  transform: activeProduct === 'product1' ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease', 
                  fontSize: '12px',
                  opacity: '0.7'
                }}>
                  ▼
                </span>
              </button>
              {activeProduct === 'product1' && (
                <ul style={{ 
                  position: 'absolute', 
                  left: '240px', 
                  top: '0', 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: '12px 8px', 
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', 
                  border: '1px solid #374151', 
                  borderRadius: '8px', 
                  minWidth: '180px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {productCategories.product1.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button 
                        onClick={() => handleCategoryClick('indian-snacks', category)} 
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 20px',
                          color: 'white',
                          textDecoration: 'none',
                          fontWeight: '500',
                          fontSize: '14px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderRadius: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#374151'
                          e.currentTarget.style.color = '#f9c74f'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'none'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Ready to Eat Meals */}
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product2')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 24px',
                  color: 'white',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                  e.currentTarget.style.color = '#f9c74f'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span>Ready to Eat Meals</span>
                <span style={{ 
                  transform: activeProduct === 'product2' ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease', 
                  fontSize: '12px',
                  opacity: '0.7'
                }}>▼</span>
              </button>
              {activeProduct === 'product2' && (
                <ul style={{ 
                  position: 'absolute', 
                  left: '240px', 
                  top: '0', 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: '12px 8px', 
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', 
                  border: '1px solid #374151', 
                  borderRadius: '8px', 
                  minWidth: '180px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {productCategories.product2.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button 
                        onClick={() => handleCategoryClick('ready-to-eat', category)} 
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 20px',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '14px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderRadius: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#374151'
                          e.currentTarget.style.color = '#f9c74f'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'none'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Chips */}
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product3')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 24px',
                  color: 'white',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                  e.currentTarget.style.color = '#f9c74f'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span>Chips</span>
                <span style={{ 
                  transform: activeProduct === 'product3' ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease', 
                  fontSize: '12px',
                  opacity: '0.7'
                }}>▼</span>
              </button>
              {activeProduct === 'product3' && (
                <ul style={{ 
                  position: 'absolute', 
                  left: '240px', 
                  top: '0', 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: '12px 8px', 
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', 
                  border: '1px solid #374151', 
                  borderRadius: '8px', 
                  minWidth: '180px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {productCategories.product3.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button 
                        onClick={() => handleCategoryClick('chips', category)} 
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 20px',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '14px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderRadius: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#374151'
                          e.currentTarget.style.color = '#f9c74f'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'none'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Chikki */}
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product4')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 24px',
                  color: 'white',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                  e.currentTarget.style.color = '#f9c74f'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span>Chikki</span>
                <span style={{ 
                  transform: activeProduct === 'product4' ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease', 
                  fontSize: '12px',
                  opacity: '0.7'
                }}>▼</span>
              </button>
              {activeProduct === 'product4' && (
                <ul style={{ 
                  position: 'absolute', 
                  left: '240px', 
                  top: '0', 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: '12px 8px', 
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', 
                  border: '1px solid #374151', 
                  borderRadius: '8px', 
                  minWidth: '180px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {productCategories.product4.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button 
                        onClick={() => handleCategoryClick('chikki', category)} 
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 20px',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '14px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderRadius: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#374151'
                          e.currentTarget.style.color = '#f9c74f'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'none'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Karachi Bakery Biscuits */}
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product5')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 24px',
                  color: 'white',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                  e.currentTarget.style.color = '#f9c74f'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span>Karachi Bakery Biscuits</span>
                <span style={{ 
                  transform: activeProduct === 'product5' ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease', 
                  fontSize: '12px',
                  opacity: '0.7'
                }}>▼</span>
              </button>
              {activeProduct === 'product5' && (
                <ul style={{ 
                  position: 'absolute', 
                  left: '240px', 
                  top: '0', 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: '12px 8px', 
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', 
                  border: '1px solid #374151', 
                  borderRadius: '8px', 
                  minWidth: '180px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {productCategories.product5.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button 
                        onClick={() => handleCategoryClick('bakery-biscuits', category)} 
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 20px',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '14px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderRadius: '6px',
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#374151'
                          e.currentTarget.style.color = '#f9c74f'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'none'
                          e.currentTarget.style.color = 'white'
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProductPageNavbar