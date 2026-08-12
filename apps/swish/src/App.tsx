import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Events } from './components/Events'
import { Learn } from './components/Learn'
import { Program } from './components/Program'
import { Players } from './components/Players'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Social } from './components/Social'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Swish — Basketball School Template'
  }, [])

  return (
    <div className="bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Learn />
        <Program />
        <Players />
        <Gallery />
        <Blog />
        <Social />
      </main>
      <Footer />
    </div>
  )
}
