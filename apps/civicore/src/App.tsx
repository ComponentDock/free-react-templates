import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Features } from './components/Features'
import { Categories } from './components/Categories'
import { Jobs } from './components/Jobs'
import { Newsletter } from './components/Newsletter'
import { Testimonials } from './components/Testimonials'
import { News } from './components/News'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Civicore — Job Board Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Features />
        <Categories />
        <Jobs />
        <Newsletter />
        <Testimonials />
        <News />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
