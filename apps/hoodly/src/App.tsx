import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Trending } from './components/Trending'
import { Categories } from './components/Categories'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'
import { AppSection } from './components/AppSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hoodly — Local Directory'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Trending />
        <Categories />
        <Testimonials />
        <Work />
        <AppSection />
      </main>
      <Footer />
    </div>
  )
}
