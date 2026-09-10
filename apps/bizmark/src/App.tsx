import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Portfolio } from './components/Portfolio'
import { AdvisoryService } from './components/AdvisoryService'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <AdvisoryService />
      <Blog />
      <Footer />
    </div>
  )
}
