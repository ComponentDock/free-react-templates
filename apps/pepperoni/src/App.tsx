import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroBar } from './components/IntroBar'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Counter } from './components/Counter'
import { Menu } from './components/Menu'
import { MenuPricing } from './components/MenuPricing'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pepperoni — Pizza Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroBar />
        <About />
        <Services />
        <Gallery />
        <Counter />
        <Menu />
        <MenuPricing />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
