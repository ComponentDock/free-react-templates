import { useState } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import OffcanvasMenu from './components/OffcanvasMenu'
import HeroSlider from './components/HeroSlider'
import Footer from './components/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Preloader />
      <Header onMenuToggle={() => setMenuOpen(true)} />
      <OffcanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <HeroSlider />
      </main>
      <Footer />
    </>
  )
}
