import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Models } from './components/Models'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { EMPTY_FILTERS, type ModelFilters } from './data/models'

export function App() {
  const [filters, setFilters] = useState<ModelFilters>(EMPTY_FILTERS)

  useEffect(() => {
    document.title = 'Catwalk — Model Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar onSearch={setFilters} />
        <Services />
        <Stats />
        <About />
        <Models filters={filters} />
        <Testimonials />
        <Events />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
