import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-['Mulish',sans-serif] text-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
