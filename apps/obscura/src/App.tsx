import { useEffect } from 'react'
import { Preloader } from './components/Preloader'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Obscura — Photography'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-white">
      <Preloader />
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <About />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
