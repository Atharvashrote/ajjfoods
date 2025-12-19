
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Slider from './components/Slider'
import ContinuousLogoSlider from './components/Clientslider'
import TopList from './components/Toplist'
import BestSellers from './components/BestSellers'
import Footer from './components/Footer'
import GlobalExport from './components/Globalexport'
import SnacksProductList from './components/SnacksProductList'
import ProductDetailPage from './components/ProductDetailPage'
import ContactForm from './components/Contactform'
import AboutUs from './components/About'
import ErrorBoundary from './components/ErrorBoundary'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Slider />
            <ContinuousLogoSlider />
            <TopList />
            <BestSellers />
            <GlobalExport />
            <Footer />
          </>
        } />
        <Route path="/snackproductlist" element={<SnacksProductList />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
      </Routes>
    </Router>
  )
}

export default App
