import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Welcome } from './components/Welcome'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Register } from './components/Register'
import { Brands } from './components/Brands'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Convoke — Conference Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Welcome />
        <Speakers />
        <Schedule />
        <Register />
        <Brands />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
