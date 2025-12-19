import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Share2, Phone, Mail, Star, Award, Shield, Truck } from 'lucide-react';
import ProductPageNavbar from './Productnavbar';
import Footer from './Footer';
const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const navigate = useNavigate();

  // Current product data
  const product = {
    id: 1,
    name: 'Besan Sev',
    category: 'Namkeen',
    businessType: 'Manufacturer, Supplier, Trader',
    features: 'Soft',
    totalFat: '14g',
    salt: '8g',
    protein: '25 g',
    saturatedFat: '3.5g',
    images: [
      '/images/food3.JPEG'
    ],
    description: 'Premium quality Besan Sev made from the finest gram flour. Crispy, flavorful, and perfect for snacking or as a topping for various Indian dishes. Our Besan Sev is made using traditional methods ensuring authentic taste and quality.',
    specifications: [
      { label: 'Business Type', value: 'Manufacturer, Supplier, Trader' },
      { label: 'Features', value: 'Soft' },
      { label: 'Total Fat', value: '14g' },
      { label: 'Salt', value: '8g' },
      { label: 'Protein', value: '25 g' },
      { label: 'Saturated Fat', value: '3.5g' }
    ]
  };

  // Related products
  const relatedProducts = [
 
    { id: 2, name: 'Tomato Soya Stick', category: 'namkeen', image: '/images/food1.JPG' },
    { id: 3, name: 'Moong Dal', category: 'namkeen', image: '/images/food2.JPEG' },
    { id: 4, name: 'Corn Mixture', category: 'namkeen', image: '/images/food4.JPEG' },
   { id: 5, name: 'Chana Dal Namkeen', category: 'namkeen', image: '/images/food5.JPEG' }, ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)' }}>
      {/* Header */}
      <ProductPageNavbar />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '35px 30px' }}>
       

        {/* Main Product Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '450px 1fr', gap: '40px', marginBottom: '50px' }}>
          {/* Left - Images */}
          <div>
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '24px', 
              border: '1px solid #f3f4f6',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              marginBottom: '20px'
            }}>
              <div style={{ position: 'relative', marginBottom: '18px' }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #f3f4f6'
                }}>
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%)'
                  }} />
                </div>
                <button style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  padding: '12px 24px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                >
                  <span>📸</span> View all images
                </button>
              </div>

              {/* Thumbnail Images */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      cursor: 'pointer',
                      border: selectedImage === idx ? '2px solid #dc2626' : '2px solid #f3f4f6',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      transform: selectedImage === idx ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: selectedImage === idx ? '0 4px 12px rgba(220,38,38,0.2)' : 'none'
                    }}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      style={{ 
                        width: '100%', 
                        height: '110px', 
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '12px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                padding: '16px',
                borderRadius: '12px',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(16,185,129,0.2)'
              }}>
                <Award size={24} style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Certified Quality</div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                padding: '16px',
                borderRadius: '12px',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(59,130,246,0.2)'
              }}>
                <Shield size={24} style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '12px', fontWeight: '600' }}>100% Authentic</div>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '35px', 
              border: '1px solid #f3f4f6',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '6px 14px',
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#92400e',
                    marginBottom: '12px'
                  }}>
                    ⭐ Premium Quality
                  </div>
                  <h1 style={{ 
                    fontSize: '36px', 
                    fontWeight: '800', 
                    margin: '0 0 8px 0', 
                    color: '#1f2937',
                    letterSpacing: '-0.5px'
                  }}>
                    {product.name}
                  </h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>4.9 (128 reviews)</span>
                  </div>
                </div>
                <button style={{
                  padding: '12px',
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.3s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <Share2 size={18} color="#6b7280" />
                </button>
              </div>

              {/* Price Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '14px', 
                marginBottom: '30px',
                paddingBottom: '30px',
                borderBottom: '2px solid #f9fafb'
              }}>
                <button style={{
                  padding: '14px 28px',
                  background: 'white',
                  border: '2px solid #dc2626',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#dc2626',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(220,38,38,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#dc2626';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(220,38,38,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#dc2626';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(220,38,38,0.1)';
                }}
                >
                  ₹ Ask Price
                </button>
                <button style={{
                  flex: 1,
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(220,38,38,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,38,38,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.3)';
                }}
                >
                  Get Best Price
                </button>
              </div>

              {/* Specifications Table */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  marginBottom: '18px', 
                  color: '#1f2937'
                }}>
                  Product Specifications
                </h3>
                <div style={{ 
                  border: '1px solid #f3f4f6',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} style={{ borderBottom: idx < product.specifications.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                          <td style={{ 
                            padding: '16px 20px', 
                            fontSize: '14px', 
                            color: '#6b7280',
                            fontWeight: '500',
                            width: '45%',
                            background: '#fafafa'
                          }}>
                            {spec.label}
                          </td>
                          <td style={{ 
                            padding: '16px 20px', 
                            fontSize: '14px', 
                            color: '#1f2937',
                            fontWeight: '600'
                          }}>
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', marginBottom: '25px' }}>
                <button 
                  onClick={() => setShowEnquiryForm(!showEnquiryForm)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    background: 'white',
                    border: '2px solid #1f2937',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1f2937',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1f2937';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#1f2937';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <Phone size={18} />
                  Request to Call
                </button>
                <button 
                  onClick={() => navigate('/contact', { state: { product: product.name } })}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(220,38,38,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,38,38,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.3)';
                  }}
                >
                  <Mail size={18} />
                  Send Enquiry
                </button>
              </div>

              {/* Additional Benefits */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px',
                padding: '20px',
                background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
                borderRadius: '12px',
                border: '1px solid #f3f4f6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    padding: '8px', 
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
                    borderRadius: '8px' 
                  }}>
                    <Truck size={18} color="#2563eb" />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1f2937' }}>Free Delivery</div>
                    <div style={{ fontSize: '11px', color: '#6b7280' }}>On bulk orders</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    padding: '8px', 
                    background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', 
                    borderRadius: '8px' 
                  }}>
                    <Shield size={18} color="#16a34a" />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1f2937' }}>Quality Assured</div>
                    <div style={{ fontSize: '11px', color: '#6b7280' }}>100% genuine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '35px', 
          border: '1px solid #f3f4f6',
          marginBottom: '50px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '800', 
            marginBottom: '25px', 
            color: '#1f2937',
            paddingBottom: '20px',
            borderBottom: '3px solid #f9fafb',
            letterSpacing: '-0.5px'
          }}>
            Detailed Product Information
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '35px' }}>
            <div style={{ 
              padding: '25px',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              borderRadius: '12px',
              border: '1px solid #fbbf24'
            }}>
              <div style={{ fontSize: '14px', color: '#92400e', fontWeight: '600', marginBottom: '8px' }}>
                Protein Content
              </div>
              <div style={{ fontSize: '32px', color: '#78350f', fontWeight: '800' }}>
                25 g
              </div>
            </div>
            <div style={{ 
              padding: '25px',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '12px',
              border: '1px solid #3b82f6'
            }}>
              <div style={{ fontSize: '14px', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>
                Saturated Fat
              </div>
              <div style={{ fontSize: '32px', color: '#1e3a8a', fontWeight: '800' }}>
                3.5g
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <button style={{
              padding: '16px 50px',
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(220,38,38,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,38,38,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.3)';
            }}
            >
            Yes! I am Interested
            </button>
          </div>
        </div>

        {/* Enquiry Form */}
        {showEnquiryForm && (
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '40px', 
            border: '1px solid #f3f4f6',
            marginBottom: '50px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '800', 
                marginBottom: '10px', 
                color: '#1f2937',
                letterSpacing: '-0.5px'
              }}>
                Looking for "{product.name}" ?
              </h2>
              <p style={{ fontSize: '15px', color: '#6b7280', margin: 0 }}>
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  style={{ 
                    width: '100%', 
                    padding: '14px 18px', 
                    border: '2px solid #f3f4f6', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>Email *</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  style={{ 
                    width: '100%', 
                    padding: '14px 18px', 
                    border: '2px solid #f3f4f6', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '15px', marginBottom: '20px', alignItems: 'end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>Mobile No *</label>
                <select style={{ 
                  padding: '14px 18px', 
                  border: '2px solid #f3f4f6', 
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  background: 'white',
                  cursor: 'pointer'
                }}>
                  <option>🇮🇳 +91</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>&nbsp;</label>
                <input 
                  type="tel" 
                  placeholder="Enter mobile number"
                  style={{ 
                    width: '100%', 
                    padding: '14px 18px', 
                    border: '2px solid #f3f4f6', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>Quantity</label>
                <input 
                  type="text" 
                  placeholder="Quantity"
                  style={{ 
                    width: '140px', 
                    padding: '14px 18px', 
                    border: '2px solid #f3f4f6', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
                />
              </div>
              <select style={{ 
                padding: '14px 18px', 
                border: '2px solid #f3f4f6', 
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                background: 'white',
                width: '130px',
                cursor: 'pointer'
              }}>
                <option>Kilogram</option>
                <option>Gram</option>
                <option>Piece</option>
              </select>
              <button style={{
                padding: '14px 24px',
                background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'}
              >
                + Add
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'start', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginTop: '4px', width: '16px', height: '16px', cursor: 'pointer' }} />
                <span style={{ fontSize: '14px', color: '#6b7280' }}>
                  I am interested to receive the quotation for the same
                </span>
              </label>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#374151', marginBottom: '8px', fontWeight: '600' }}>
                Mention Requirements
              </label>
              <textarea 
                placeholder="I am interested in this product, please send me the quotation"
                style={{ 
                  width: '100%', 
                  padding: '14px 18px', 
                  border: '2px solid #f3f4f6', 
                  borderRadius: '10px',
                  fontSize: '14px',
                  outline: 'none',
                  minHeight: '110px',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#dc2626'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => navigate('/contact', { state: { product: product.name } })}
                style={{
                  padding: '16px 60px',
                  background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        )}

        {/* Related Products */}
        <div>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '800', 
            marginBottom: '35px', 
            color: '#1f2937',
            textAlign: 'center',
            letterSpacing: '-0.5px'
          }}>
            Explore More Premium Products
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginBottom: '40px'
          }}>
            {relatedProducts.map(relatedProduct => (
              <div
                key={relatedProduct.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #f3f4f6',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#f3f4f6';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    style={{ 
                      width: '100%', 
                      height: '240px', 
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s'
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 12px',
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#dc2626'
                  }}>
                    NEW
                  </div>
                </div>

                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <h3 style={{ 
                    fontSize: '17px', 
                    fontWeight: '700', 
                    marginBottom: '18px', 
                    color: '#1f2937',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {relatedProduct.name}
                  </h3>

                  <button style={{
                    width: '100%',
                    padding: '14px 20px',
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(220,38,38,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(220,38,38,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(220,38,38,0.2)';
                  }}
                  >
                    Get Best Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <div
                key={i}
                style={{
                  width: i === 0 ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  background: i === 0 ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' : '#e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;