import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
