import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './Slider.css';
const slides = [
  {
    image: '/images/food1.JPG',
name: 'Tomato Soya Stick',
desc: `Crispy, crunchy sticks with a tangy tomato twist.  
Made from wholesome soya for a satisfying bite every time.  
Bursting with bold tomato flavour and a hint of spice.  
A crunchy snack that’s perfect for munching anytime, anywhere.`,
nutrition: { 
  energy: 420, 
  protein: 18.0, 
  carbohydrate: 48.5, 
  sugars: 4.2, 
  fibre: 6.5, 
  fat: 16.8, 
  sodium: 780 
}
},
  {
    image: '/images/food2.JPEG',
    name: 'Moong Dal Kachori',
desc: `Golden, crispy kachoris filled with a flavorful moong dal stuffing.  
Perfectly spiced for a rich, traditional taste in every bite.  
Crunchy on the outside with a savory, aromatic filling inside.  
A classic Indian snack that’s perfect for tea-time or anytime cravings.`,
nutrition: { 
  energy: 455, 
  protein: 12.5, 
  carbohydrate: 52.0, 
  sugars: 2.8, 
  fibre: 7.2, 
  fat: 20.5, 
  sodium: 690 
} },

  {
    image: '/images/food4.JPEG',
    name: 'Corn Mixture (Makai Chivdo)',
desc: `A crunchy blend of roasted corn flakes and savory spices.  
Perfectly balanced flavors with a light, crispy texture.  
Made with traditional seasoning for an authentic Indian taste.  
An addictive snack that’s ideal for tea-time or anytime munching.`,
nutrition: { 
  energy: 485, 
  protein: 9.5, 
  carbohydrate: 58.0, 
  sugars: 3.6, 
  fibre: 7.8, 
  fat: 22.5, 
  sodium: 820 
}  }
];


const Slider = () => {
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const { ref: sliderRef, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: true
  });

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const getPositionClass = (i) => {
    if (i === index) return 'center';
    if (i === (index - 1 + slides.length) % slides.length) return 'left';
    if (i === (index + 1) % slides.length) return 'right';
    return 'hidden';
  };

  useEffect(() => {
    setShowCard(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowCard(true), 500);
    return () => clearTimeout(timerRef.current);
  }, [index]);

  const { nutrition } = slides[index];

  return (
    <div className="slider" ref={sliderRef}>
      <motion.h1
        className="range"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        OUR RANGE
      </motion.h1>

      <button className="arrow left-arrow" onClick={prevSlide}>❮</button>

   <div className="slider-data">
   <div className="slider-wrapper">
      <AnimatePresence mode="wait">
  {slides.map((slide, i) => 
    i === index && (
      <motion.img
        key={index}
        src={slide.image}
        alt={`maggie-${i}`}
        className="maggie-img"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    )
  )}
</AnimatePresence>


        <div className={`nutrition-card ${showCard ? 'visible' : ''}`}>
          <h3>Nutrition Value</h3>
          <table>
            <tbody>
              <tr><td>Energy (kcal)</td><td>{nutrition.energy}</td></tr>
              <tr><td>Protein (g)</td><td>{nutrition.protein}</td></tr>
              <tr><td>Carbohydrate (g)</td><td>{nutrition.carbohydrate}</td></tr>
              <tr><td>Total Sugars (g)</td><td>{nutrition.sugars}</td></tr>
              <tr><td>Fibre (g)</td><td>{nutrition.fibre}</td></tr>
              <tr><td>Total Fat (g)</td><td>{nutrition.fat}</td></tr>
              <tr><td>Sodium (mg)</td><td>{nutrition.sodium}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="slider-right">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1>{slides[index].name}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{slides[index].desc}</p>
      
      <motion.button
        className="try-now-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/snackproductlist')}
      >
        TRY NOW
      </motion.button>
    </motion.div>
  </AnimatePresence>
</div>


   </div>

      <button className="arrow right-arrow" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
