import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Equipment } from './components/Equipment'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { VideoCta } from './components/VideoCta'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Equipment />
        <Pricing />
        <Testimonials />
        <Services />
        <VideoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
