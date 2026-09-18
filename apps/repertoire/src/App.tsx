import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Repertoire — Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Sidebar />
      <main className="lg:ml-[260px]">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
