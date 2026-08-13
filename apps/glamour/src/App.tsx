import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Models } from './components/Models'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { QuoteStrip } from './components/QuoteStrip'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-body-grey">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Models />
        <Testimonials />
        <Services />
        <QuoteStrip />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
