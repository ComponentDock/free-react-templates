import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fotura — Photography Portfolio Template'
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSlider />
      </main>
      <Footer />
    </div>
  )
}
