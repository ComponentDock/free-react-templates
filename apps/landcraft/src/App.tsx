import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FunFacts from './components/FunFacts'
import Portfolio from './components/Portfolio'
import VideoCta from './components/VideoCta'
import Team from './components/Team'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import QuoteCta from './components/QuoteCta'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FunFacts />
      <Portfolio />
      <VideoCta />
      <Team />
      <Faq />
      <Testimonials />
      <QuoteCta />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}
