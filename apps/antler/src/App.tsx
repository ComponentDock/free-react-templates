import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'

export function App() {
  useEffect(() => {
    document.title = 'Antler — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[#212529]">
      <Navbar />
      <main>
        <Hero />
        <BlogList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
