import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { DealOfDay } from './components/DealOfDay'
import { Testimonials } from './components/Testimonials'
import { Partners } from './components/Partners'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Greenplate — Fresh Grocery & Organic Food'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
        <Products />
        <DealOfDay />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
