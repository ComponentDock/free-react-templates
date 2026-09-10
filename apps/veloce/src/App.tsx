import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Products } from './components/Products'
import { Testimonial } from './components/Testimonial'
import { Stats } from './components/Stats'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Veloce — Automotive Service Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ChooseUs />
        <Products />
        <Testimonial />
        <Stats />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
