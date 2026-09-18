import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { DiscountCTA } from './components/DiscountCTA'
import { WorkProcess } from './components/WorkProcess'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <DiscountCTA />
      <WorkProcess />
      <FAQ />
      <Testimonials />
      <Blog />
      <Brands />
      <Footer />
    </div>
  )
}
