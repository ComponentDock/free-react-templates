import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SocialBar } from './components/SocialBar'
import { Intro } from './components/Intro'
import { Events } from './components/Events'
import { Portfolio } from './components/Portfolio'
import { Clients } from './components/Clients'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vibrance — Design Studio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialBar />
        <Intro />
        <Events />
        <Portfolio />
        <Clients />
        <About />
        <Counter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
