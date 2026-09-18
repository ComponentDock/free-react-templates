import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { Quote } from './components/Quote'
import { Testimonials } from './components/Testimonials'
import { CallToAction } from './components/CallToAction'
import { Products } from './components/Products'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Counter />
      <About />
      <Quote />
      <Testimonials />
      <CallToAction />
      <Products />
      <LatestNews />
      <Footer />
    </div>
  )
}
