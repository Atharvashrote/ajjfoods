import React, { useRef, useEffect, useState, useMemo } from 'react'

const GlobeNetwork = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [hoveredCountry, setHoveredCountry] = useState(null)

  const countries = useMemo(() => [
     { 
      name: 'India', 
      code: 'IN',
      lat: 20.5937, 
      lon: 78.9629, 
      color: '#F38181',
      stats: '12000+',
      flag: 'https://flagcdn.com/w80/in.png',
      isHub: true
    },
    { 
      name: 'United States', 
      code: 'US',
      lat: 37.0902, 
      lon: -95.7129, 
      color: '#FF6B6B',
      stats: '5000+',
      flag: 'https://flagcdn.com/w80/us.png'
    },
    { 
      name: 'United Kingdom', 
      code: 'UK',
      lat: 55.3781, 
      lon: -3.4360, 
      color: '#4ECDC4',
      stats: '2000+',
      flag: 'https://flagcdn.com/w80/gb.png'
    },
    { 
      name: 'UAE', 
      code: 'AE',
      lat: 23.4241, 
      lon: 53.8478, 
      color: '#FFD93D',
      stats: '3500+',
      flag: 'https://flagcdn.com/w80/ae.png'
    },
    { 
      name: 'South Africa', 
      code: 'ZA',
      lat: -30.5595, 
      lon: 22.9375, 
      color: '#95E1D3',
      stats: '1800+',
      flag: 'https://flagcdn.com/w80/za.png'
    },
   
  ], [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d', { alpha: true })
    const dpr = window.devicePixelRatio || 1
    
    const width = 1400
    const height = 800
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)
    
    const centerX = width * 0.3
    const centerY = height * 0.5
    const radius = 280
    
    const latLonToSpherical = (lat, lon) => ({
      theta: lon * Math.PI / 180,
      phi: Math.PI / 2 - lat * Math.PI / 180
    })
    
    const countryNodes = countries.map(country => ({
      ...country,
      ...latLonToSpherical(country.lat, country.lon),
      size: country.isHub ? 16 : 10
    }))
    
    // World map continents outline (simplified)
    const continents = [
      // North America
      { lat: 54, lon: -105, connections: [[40, -100], [30, -95], [20, -100], [25, -110]] },
      // South America
      { lat: -15, lon: -60, connections: [[-5, -65], [-20, -55], [-35, -65]] },
      // Europe
      { lat: 50, lon: 10, connections: [[55, 15], [50, 25], [45, 20], [48, 5]] },
      // Africa
      { lat: 5, lon: 20, connections: [[15, 25], [0, 30], [-15, 25], [-25, 20], [-30, 25]] },
      // Asia
      { lat: 45, lon: 95, connections: [[60, 100], [50, 110], [35, 115], [30, 90], [40, 80]] },
      // Australia
      { lat: -25, lon: 135, connections: [[-20, 140], [-30, 145], [-35, 140], [-30, 130]] }
    ]
    
    const project = (theta, phi, rotation) => {
      const x = Math.sin(phi) * Math.cos(theta + rotation)
      const y = Math.sin(phi) * Math.sin(theta + rotation)
      const z = Math.cos(phi)
      
      const scale = 1 / (1 + z * 0.3)
      const x2d = centerX + x * radius * scale
      const y2d = centerY + y * radius * scale
      
      return { x: x2d, y: y2d, z, scale }
    }
    
    const drawWorldMap = (rotation) => {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
      ctx.lineWidth = 2
      
      continents.forEach(continent => {
        const points = continent.connections.map(([lat, lon]) => {
          const spherical = latLonToSpherical(lat, lon)
          return project(spherical.theta, spherical.phi, rotation)
        })
        
        ctx.beginPath()
        points.forEach((point, i) => {
          if (point.z > -0.3) {
            if (i === 0) {
              ctx.moveTo(point.x, point.y)
            } else {
              ctx.lineTo(point.x, point.y)
            }
          }
        })
        ctx.closePath()
        ctx.stroke()
        
        // Fill continents
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
        ctx.fill()
      })
    }
    
    const drawGlobeGrid = (rotation) => {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.lineWidth = 1
      
      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath()
        let firstPoint = true
        
        for (let lon = 0; lon <= 360; lon += 5) {
          const { x, y, z } = project(
            lon * Math.PI / 180,
            (90 - lat) * Math.PI / 180,
            rotation
          )
          
          if (z > -0.3) {
            if (firstPoint) {
              ctx.moveTo(x, y)
              firstPoint = false
            } else {
              ctx.lineTo(x, y)
            }
          } else {
            firstPoint = true
          }
        }
        ctx.stroke()
      }
      
      // Longitude lines
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath()
        let firstPoint = true
        
        for (let lat = -90; lat <= 90; lat += 5) {
          const { x, y, z } = project(
            lon * Math.PI / 180,
            (90 - lat) * Math.PI / 180,
            rotation
          )
          
          if (z > -0.3) {
            if (firstPoint) {
              ctx.moveTo(x, y)
              firstPoint = false
            } else {
              ctx.lineTo(x, y)
            }
          } else {
            firstPoint = true
          }
        }
        ctx.stroke()
      }
    }
    
    let rotation = 0
    let connectionPhase = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      rotation += 0.002
      connectionPhase += 0.02
      
      const projectedCountries = countryNodes.map(node => {
        const projected = project(node.theta, node.phi, rotation)
        return { ...node, ...projected, visible: projected.z > -0.5 }
      }).sort((a, b) => a.z - b.z)
      
      // Draw world map first
      drawWorldMap(rotation)
      
      // Draw grid
      drawGlobeGrid(rotation)
      
      // Draw animated connections between countries
      const hubNode = projectedCountries.find(c => c.isHub)
      
      projectedCountries.forEach((country, i) => {
        if (!country.visible || country.isHub) return
        
        if (hubNode && hubNode.visible) {
          const distance = Math.sqrt(
            Math.pow(country.x - hubNode.x, 2) + 
            Math.pow(country.y - hubNode.y, 2)
          )
          
          // Animated pulse effect along connection
          const pulseProgress = ((connectionPhase + i * 0.5) % 2) / 2
          const pulseX = hubNode.x + (country.x - hubNode.x) * pulseProgress
          const pulseY = hubNode.y + (country.y - hubNode.y) * pulseProgress
          
          // Draw connection line
          const gradient = ctx.createLinearGradient(
            hubNode.x, hubNode.y, country.x, country.y
          )
          gradient.addColorStop(0, hubNode.color)
          gradient.addColorStop(1, country.color)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.globalAlpha = 0.6
          ctx.beginPath()
          ctx.moveTo(hubNode.x, hubNode.y)
          ctx.lineTo(country.x, country.y)
          ctx.stroke()
          ctx.globalAlpha = 1
          
          // Draw glowing pulse dot traveling along connection
          const pulseGradient = ctx.createRadialGradient(
            pulseX, pulseY, 0,
            pulseX, pulseY, 15
          )
          pulseGradient.addColorStop(0, '#fff')
          pulseGradient.addColorStop(0.4, country.color)
          pulseGradient.addColorStop(1, 'transparent')
          
          ctx.fillStyle = pulseGradient
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 15, 0, Math.PI * 2)
          ctx.fill()
          
          // Draw small pulse dot
          ctx.fillStyle = '#fff'
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      // Draw country nodes with enhanced visibility
      const time = Date.now()
      projectedCountries.forEach(country => {
        if (!country.visible) return
        
        const size = country.size * country.scale * 1.2
        const pulseSize = size * (1 + Math.sin(time * 0.003 + country.theta) * 0.15)
        
        // Large outer glow
        const outerGlow = ctx.createRadialGradient(
          country.x, country.y, 0,
          country.x, country.y, pulseSize * 4
        )
        outerGlow.addColorStop(0, `${country.color}80`)
        outerGlow.addColorStop(0.5, `${country.color}40`)
        outerGlow.addColorStop(1, 'transparent')
        ctx.fillStyle = outerGlow
        ctx.beginPath()
        ctx.arc(country.x, country.y, pulseSize * 4, 0, Math.PI * 2)
        ctx.fill()
        
        // White ring
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.arc(country.x, country.y, size + 2, 0, Math.PI * 2)
        ctx.stroke()
        
        // Main colored node
        ctx.fillStyle = country.color
        ctx.beginPath()
        ctx.arc(country.x, country.y, size, 0, Math.PI * 2)
        ctx.fill()
        
        // Inner highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.beginPath()
        ctx.arc(country.x - size * 0.3, country.y - size * 0.3, size * 0.4, 0, Math.PI * 2)
        ctx.fill()
        
        // Country code text
        ctx.fillStyle = '#000'
        ctx.font = `bold ${size * 1.1}px Poppins, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(country.code, country.x, country.y)
        
        // Pulsing ring for hub
        if (country.isHub) {
          const ringSize = size + 8 + Math.sin(time * 0.004) * 4
          ctx.strokeStyle = country.color
          ctx.lineWidth = 3
          ctx.globalAlpha = 0.6
          ctx.beginPath()
          ctx.arc(country.x, country.y, ringSize, 0, Math.PI * 2)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [countries])

  return (
    <div className="globe-container">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      
      <canvas ref={canvasRef} className="globe-canvas" />
      
      <div className="content-wrapper">
        <div className="globe-spacer" />
        
        <div className="content-panel">
          <div className="header-section">
            <span className="badge" >🌍 WORLDWIDE DELIVERY</span>
            <h1 className="title">Connecting the World</h1>
            <p className="subtitle">One Delicious Snack at a Time</p>
          </div>
          
          <p className="description">
            From bustling cities to quiet towns, our authentic Indian namkeen travels across oceans and borders, bringing traditional flavors to food lovers worldwide.
          </p>
          
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">24K+</div>
              <div className="stat-label">Global Deliveries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Fresh Delivery</div>
            </div>
          </div>
          
          <div className="country-list">
            <h3 className="list-title">🎯 Top Markets</h3>
            {countries.map((country, i) => (
              <div
                key={country.code}
                className={`country-card ${hoveredCountry === country.code ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCountry(country.code)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  '--country-color': country.color,
                  '--delay': `${1.5 + i * 0.1}s`
                }}
              >
                <div className="country-icon" style={{ background: country.color }}>
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="flag-image"
                  />
                </div>
                <div className="country-info">
                  <div className="country-header">
                    <h3 className="country-name">{country.name}</h3>
                    {country.isHub && <span className="hub-badge">⭐ HUB</span>}
                  </div>
                  <p className="country-stats">📦 {country.stats} orders delivered</p>
                </div>
                <div className="country-arrow">→</div>
              </div>
            ))}
          </div>
          
          <div className="cta-section">
            <button className="cta-button">
              Order International Delivery
              <span className="button-icon">🚀</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .globe-container {
          background: radial-gradient(circle, #FFE34C 0%, #FFB900 100%);
          height: 130vh;
          padding: 40px 5%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
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
        
        .globe-canvas {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          max-width: 100%;
          z-index: 1;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 60px;
        }
        
        .globe-spacer {
          flex: 0 0 45%;
        }
        
        .content-panel {
          flex: 1;
          padding-left: 40px;
          animation: slideIn 0.8s ease-out 0.5s both;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .header-section {
          margin-bottom: 20px;
        }
        
        .badge {
          display: inline-block;
          background: rgba(0, 0, 0, 0.9);
          color: #FFE34C;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 1px;
          margin-bottom: 12px;
          animation: fadeInUp 0.6s ease-out 0.6s both;
        }
        
        .title {
          font-size: 40px;
          font-weight: 900;
          color: #000;
          margin-bottom: 8px;
          font-family: 'Poppins', sans-serif;
          line-height: 1.1;
          letter-spacing: -1px;
          animation: fadeInUp 0.6s ease-out 0.7s both;
        }
        
        .subtitle {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.7);
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
          animation: fadeInUp 0.6s ease-out 0.8s both;
        }
        
        .description {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 1.6;
          margin-bottom: 20px;
          font-family: 'Inter', sans-serif;
          max-width: 520px;
          animation: fadeInUp 0.6s ease-out 0.9s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 25px;
          animation: fadeInUp 0.6s ease-out 1s both;
        }
        
        .stat-item {
          background: rgba(0, 0, 0, 0.05);
          padding: 12px;
          border-radius: 12px;
          text-align: center;
          border: 2px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 3px;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 600;
          font-family: 'Inter', sans-serif;
        }
        
        .list-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
          animation: fadeInUp 0.6s ease-out 1.2s both;
        }
        
        .country-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 25px;
        }
        
        .country-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 16px;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInSlide 0.4s ease-out var(--delay) both;
        }
        
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .country-card.hovered {
          background: rgba(255, 255, 255, 1);
          border-color: var(--country-color);
          box-shadow: 0 12px 40px var(--country-color)60;
          transform: scale(1.04) translateX(8px);
        }
        
        .country-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .flag-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .country-card.hovered .country-icon {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }
        
        .country-info {
          flex: 1;
        }
        
        .country-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }
        
        .country-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #000;
          font-family: 'Poppins', sans-serif;
        }
        
        .hub-badge {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          font-size: 0.65rem;
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
        }
        
        .country-stats {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.6);
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
        
        .country-arrow {
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .country-card.hovered .country-arrow {
          color: var(--country-color);
          transform: translateX(8px);
        }
        
        .cta-section {
          text-align: center;
          margin-top: 25px;
          animation: fadeInUp 0.6s ease-out 1.8s both;
        }
        
        .cta-button {
          background: #000;
          color: #FFE34C;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          background: #1a1a1a;
        }
        
        .button-icon {
          font-size: 1.1rem;
          animation: rocket 1s ease-in-out infinite;
        }
        
        @keyframes rocket {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .cta-note {
          margin-top: 8px;
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.6);
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
        
        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
            gap: 40px;
          }
          
          .globe-spacer {
            display: none;
          }
          
          .content-panel {
            padding-left: 0;
            text-align: center;
            max-width: 600px;
          }
          
          .description {
            margin-left: auto;
            margin-right: auto;
          }
          
          .globe-canvas {
            position: relative;
            transform: none;
            top: auto;
          }
          
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default GlobeNetwork