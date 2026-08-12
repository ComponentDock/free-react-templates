import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Framely — Photography Studio'
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
      </main>
      <Footer />
    </>
  )
}
