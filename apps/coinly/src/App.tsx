import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Process } from './components/Process'
import { Facts } from './components/Facts'
import { Team } from './components/Team'
import { Review } from './components/Review'
import { Newsletter } from './components/Newsletter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Coinly — Crypto & Finance Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-brand">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Process />
        <Facts />
        <Team />
        <Review />
        <Newsletter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
