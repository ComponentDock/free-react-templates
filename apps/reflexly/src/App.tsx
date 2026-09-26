import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Categories } from './components/Categories'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Reflexly — Photography Studio Template'
  }, [])

  return (
    <div className="min-h-screen bg-bg-light font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <Services />
        <Categories />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
