import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Products } from './components/Products'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vintner — Wine Shop Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <HeroSlider />
        <Products />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
