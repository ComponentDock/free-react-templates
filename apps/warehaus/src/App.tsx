import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { BestSellers } from './components/BestSellers'
import { NewCollections } from './components/NewCollections'
import { Products } from './components/Products'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <BestSellers />
      <NewCollections />
      <Products />
      <Counter />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
