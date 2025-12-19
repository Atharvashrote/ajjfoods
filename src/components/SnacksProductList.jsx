import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductPageNavbar from './Productnavbar';
import Footer from './Footer';

const SnacksProductList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(1000);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'namkeen', name: 'Namkeen', count: 12 },
    { id: 'chips', name: 'Chips', count: 0 },
    { id: 'nuts', name: 'Nuts & Seeds', count: 0 }
  ];

  const products = [
    { id: 1, name: 'Besan Sev', category: 'namkeen', image: '/images/food3.JPEG' },
    { id: 2, name: 'Tomato Soya Stick', category: 'namkeen', image: '/images/food1.JPG' },
    { id: 3, name: 'Moong Dal', category: 'namkeen', image: '/images/food2.JPEG' },
    { id: 4, name: 'Corn Mixture', category: 'namkeen', image: '/images/food4.JPEG' },
    { id: 5, name: 'Chana Dal Namkeen', category: 'namkeen', image: '/images/food5.JPEG' },
    { id: 6, name: 'Mixture', category: 'namkeen', image: '/images/food8.png' },
    { id: 7, name: 'Chana Namkeen', category: 'namkeen', image: '/images/food12.png' },
    { id: 8, name: 'Aloo Bhujiya Sev', category: 'namkeen', image: '/images/food11.png' },
   ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
       {/* Navbar */}
     <ProductPageNavbar />
      {/* Header */}
      {/* <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '20px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>Premium Snacks</div>
            <nav style={{ display: 'flex', gap: '30px', fontSize: '15px', color: '#6b7280', fontWeight: '500' }}>
              <a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>Home</a>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Products</a>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header> */}

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 30px' }}>
        {/* Breadcrumb */}
        {/* <div style={{ background: 'white', borderRadius: '12px', padding: '24px 30px', marginBottom: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#b91c1c' }}>Indian Snacks & Namkeen</h1>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280', gap: '8px' }}>
            <span style={{ color: '#1f2937', fontWeight: '500' }}>Home</span>
            <ChevronRight size={16} />
            <span>Products</span>
          </div>
        </div> */}

        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Sidebar */}
          <aside style={{ 
            width: showFilters ? '300px' : '0', 
            flexShrink: 0, 
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            opacity: showFilters ? 1 : 0
          }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '30px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #f3f4f6'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#1f2937' }}>Filters</h3>
                <button 
                  onClick={() => setShowFilters(false)} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    fontSize: '20px', 
                    cursor: 'pointer', 
                    color: '#9ca3af',
                    padding: '4px'
                  }}
                >
                  ×
                </button>
              </div>

              {/* Categories */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  marginBottom: '16px', 
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Categories
                </h4>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      marginBottom: '8px',
                      borderRadius: '8px',
                      border: selectedCategory === cat.id ? '1px solid #1f2937' : '1px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: '500',
                      fontSize: '15px',
                      transition: 'all 0.2s',
                      background: selectedCategory === cat.id ? '#f9fafb' : 'transparent',
                      color: selectedCategory === cat.id ? '#1f2937' : '#6b7280'
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ 
                      fontSize: '12px', 
                      fontWeight: '600', 
                      padding: '3px 10px', 
                      borderRadius: '12px', 
                      background: selectedCategory === cat.id ? '#1f2937' : '#f3f4f6',
                      color: selectedCategory === cat.id ? 'white' : '#6b7280'
                    }}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <h4 style={{ 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  marginBottom: '16px', 
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  style={{ width: '100%', marginBottom: '16px', accentColor: '#1f2937' }}
                />
                <div style={{ 
                  background: '#f9fafb', 
                  padding: '16px', 
                  borderRadius: '8px', 
                  border: '1px solid #f3f4f6'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#9ca3af', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Min</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: '#1f2937' }}>₹0</p>
                    </div>
                    <span style={{ color: '#d1d5db', fontWeight: '300' }}>—</span>
                    <div>
                      <p style={{ fontSize: '11px', color: '#9ca3af', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Max</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>₹{priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <main style={{ flex: 1 }}>
            {/* Toolbar */}
            <div style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '20px 24px', 
              marginBottom: '30px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '16px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #f3f4f6'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  style={{ 
                    padding: '10px 20px', 
                    background: '#1f2937', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    fontSize: '14px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#374151'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#1f2937'}
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#6b7280' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#1f2937' }}>{filteredProducts.length}</span> Products
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', background: '#f9fafb', padding: '4px', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{ 
                    padding: '8px 16px', 
                    background: viewMode === 'grid' ? 'white' : 'transparent', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    fontSize: '14px',
                    color: viewMode === 'grid' ? '#1f2937' : '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: viewMode === 'grid' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Grid size={16} />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{ 
                    padding: '8px 16px', 
                    background: viewMode === 'list' ? 'white' : 'transparent', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    fontSize: '14px',
                    color: viewMode === 'list' ? '#1f2937' : '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: viewMode === 'list' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <List size={16} />
                  List
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr', 
              gap: '24px' 
            }}>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid #f3f4f6',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ 
                        width: '100%', 
                        height: '240px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  <div style={{ padding: '24px', textAlign: 'center' }}>
                    <h3 style={{ 
                      fontSize: '17px', 
                      fontWeight: '600', 
                      marginBottom: '24px', 
                      color: '#1f2937', 
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {product.name}
                    </h3>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}
                        style={{
                          flex: 1,
                          padding: '12px 20px',
                          background: '#1f2937',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          letterSpacing: '0.3px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#111827';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#1f2937';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        Enquiry Now
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
                        style={{
                          flex: 1,
                          padding: '12px 20px',
                          background: 'white',
                          color: '#1f2937',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          letterSpacing: '0.3px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f9fafb';
                          e.currentTarget.style.borderColor = '#9ca3af';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.borderColor = '#d1d5db';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* Features */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px', 
          marginTop: '60px' 
        }}>
          {[
            { icon: '🚚', title: 'Free Delivery', desc: 'On orders above ₹499', color: '#1f2937' },
            { icon: '🏆', title: 'Premium Quality', desc: '100% authentic products', color: '#374151' },
            { icon: '💎', title: 'Best Prices', desc: 'Competitive market rates', color: '#4b5563' }
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                border: '1px solid #f3f4f6',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  fontSize: '48px', 
                  background: '#f9fafb', 
                  padding: '20px', 
                  borderRadius: '12px',
                  border: '1px solid #f3f4f6'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    margin: '0 0 6px 0',
                    color: '#1f2937'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#6b7280', 
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default SnacksProductList;