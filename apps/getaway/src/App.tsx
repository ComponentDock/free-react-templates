import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchForm } from './components/SearchForm'
import { Services } from './components/Services'
import { Statistics } from './components/Statistics'
import { BestPlaces } from './components/BestPlaces'
import { TourPackages } from './components/TourPackages'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Getaway — Travel Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SearchForm />
        <Services />
        <Statistics />
        <BestPlaces />
        <TourPackages />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
