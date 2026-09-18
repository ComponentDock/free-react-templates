import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Support } from './components/Support'
import { Cases } from './components/Cases'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'EcoPulse — Environmental Organization'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Support />
        <Cases />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
