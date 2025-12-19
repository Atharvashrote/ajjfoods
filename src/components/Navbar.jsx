import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
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

  return (
    <div style={{ position: 'relative', zIndex: 1000 }} ref={dropdownRef}>
      <nav className="bg-black text-white flex items-center justify-center gap-12 px-0" 
           style={{
             width: '1100px',
             height: '60px',
             fontFamily: "'Poppins', sans-serif",
             clipPath: 'polygon(0 0, 50px 100%, calc(100% - 50px) 100%, 100% 0)',
             position: 'relative'
           }}>
        <div className="logo">
          <img src='./images/logo.png' alt="Logo" className="h-17.5 w-auto" />
        </div>
        <ul className="flex gap-8 list-none text-base p-0">
          <li><button onClick={() => navigate('/about')} className="text-white no-underline  hover:text-[#f9c74f] transition-colors duration-300 bg-none border-none cursor-pointer">About</button></li>
          
          <li className="relative group">
            <a 
              href="/SnackProductList" 
              className="text-white no-underline font-medium hover:text-[#f9c74f] transition-colors duration-300 cursor-pointer flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                toggleDropdown()
              }}
            >
              Products
              <span style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-block', fontSize: '14px' }}>▼</span>
            </a>
          </li>
          
          <li><a href="#clients" className="text-white no-underline font-medium hover:text-[#f9c74f] transition-colors duration-300">Our Clients</a></li>
          <li><a href="#shop" className="text-white no-underline font-medium hover:text-[#f9c74f] transition-colors duration-300">Quality Assurance</a></li>
          <li><button onClick={() => navigate('/contact')} className="text-white no-underline font-medium hover:text-[#f9c74f] transition-colors duration-300 bg-none border-none cursor-pointer">Contact</button></li>
        </ul>
      </nav>
      
      {showDropdown && (
        <div 
          style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999
          }}
        >
          <ul className="bg-black py-3 list-none rounded-lg shadow-2xl border border-gray-800"
              style={{
                background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                width: '220px',
                minWidth: '220px',
                padding: '12px 8px'
              }}>
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product1')}
                className="w-full text-left px-8 py-3 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 bg-none border-none cursor-pointer flex justify-between items-center group"
              >
                <span>Indian Snacks & Namkeens</span>
                <span style={{ transform: activeProduct === 'product1' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '12px', fontWeight: 'bold', opacity: '0.7' }}>▼</span>
              </button>
              {activeProduct === 'product1' && (
                <ul style={{ position: 'absolute', left: '220px', top: '0', listStyle: 'none', margin: 0, padding: '12px 8px', background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', border: '1px solid #374151', borderRadius: '0.5rem', minWidth: '160px' }}>
                  {productCategories.product1.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button onClick={() => navigate(`/snackproductlist?product=indian-snacks&category=${formatCategory(category)}`)} className="block w-full text-left px-6 py-2 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 text-sm bg-none border-none cursor-pointer">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product2')}
                className="w-full text-left px-8 py-3 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 bg-none border-none cursor-pointer flex justify-between items-center group"
              >
                <span>Ready to Eat Meals</span>
                <span style={{ transform: activeProduct === 'product2' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '12px', fontWeight: 'bold', opacity: '0.7' }}>▼</span>
              </button>
              {activeProduct === 'product2' && (
                <ul style={{ position: 'absolute', left: '220px', top: '0', listStyle: 'none', margin: 0, padding: '12px 8px', background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', border: '1px solid #374151', borderRadius: '0.5rem', minWidth: '160px' }}>
                  {productCategories.product2.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button onClick={() => navigate(`/snackproductlist?product=ready-to-eat&category=${formatCategory(category)}`)} className="block w-full text-left px-6 py-2 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 text-sm bg-none border-none cursor-pointer">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product3')}
                className="w-full text-left px-8 py-3 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 bg-none border-none cursor-pointer flex justify-between items-center group"
              >
                <span>Chips</span>
                <span style={{ transform: activeProduct === 'product3' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '12px', fontWeight: 'bold', opacity: '0.7' }}>▼</span>
              </button>
              {activeProduct === 'product3' && (
                <ul style={{ position: 'absolute', left: '220px', top: '0', listStyle: 'none', margin: 0, padding: '12px 8px', background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', border: '1px solid #374151', borderRadius: '0.5rem', minWidth: '160px' }}>
                  {productCategories.product3.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button onClick={() => navigate(`/snackproductlist?product=chips&category=${formatCategory(category)}`)} className="block w-full text-left px-6 py-2 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 text-sm bg-none border-none cursor-pointer">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product4')}
                className="w-full text-left px-8 py-3 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 bg-none border-none cursor-pointer flex justify-between items-center group"
              >
                <span>Chikki</span>
                <span style={{ transform: activeProduct === 'product4' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '12px', fontWeight: 'bold', opacity: '0.7' }}>▼</span>
              </button>
              {activeProduct === 'product4' && (
                <ul style={{ position: 'absolute', left: '220px', top: '0', listStyle: 'none', margin: 0, padding: '12px 8px', background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', border: '1px solid #374151', borderRadius: '0.5rem', minWidth: '160px' }}>
                  {productCategories.product4.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button onClick={() => navigate(`/snackproductlist?product=chikki&category=${formatCategory(category)}`)} className="block w-full text-left px-6 py-2 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 text-sm bg-none border-none cursor-pointer">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{ padding: '8px 0', position: 'relative' }}>
              <button
                onClick={() => handleProductClick('product5')}
                className="w-full text-left px-8 py-3 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 bg-none border-none cursor-pointer flex justify-between items-center group"
              >
                <span>Karachi Bakery Biscuits</span>
                <span style={{ transform: activeProduct === 'product5' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '12px', fontWeight: 'bold', opacity: '0.7' }}>▼</span>
              </button>
              {activeProduct === 'product5' && (
                <ul style={{ position: 'absolute', left: '220px', top: '0', listStyle: 'none', margin: 0, padding: '12px 8px', background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)', border: '1px solid #374151', borderRadius: '0.5rem', minWidth: '160px' }}>
                  {productCategories.product5.map((category, idx) => (
                    <li key={idx} style={{ padding: '6px 0' }}>
                      <button onClick={() => navigate(`/snackproductlist?product=bakery-biscuits&category=${formatCategory(category)}`)} className="block w-full text-left px-6 py-2 text-white no-underline font-medium hover:bg-gray-800 hover:text-[#f9c74f] transition-all duration-300 text-sm bg-none border-none cursor-pointer">
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

export default Navbar