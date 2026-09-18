import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchFilter } from './components/SearchFilter'
import { Properties } from './components/Properties'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Domicile — Real Estate Template'
  }, [])
  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <SearchFilter />
        <Properties />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
