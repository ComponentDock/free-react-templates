import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Convene — Conference Event Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Counter />
        <About />
        <Speakers />
        <Schedule />
        <Pricing />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
