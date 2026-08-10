import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Trending } from './components/Trending'
import { Intro } from './components/Intro'
import { Products } from './components/Products'
import { Sale } from './components/Sale'
import { Testimony } from './components/Testimony'
import { Blog } from './components/Blog'
import { Counter } from './components/Counter'
import { Services } from './components/Services'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Couture — Fashion Shop Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Trending />
        <Intro />
        <Products />
        <Sale />
        <Testimony />
        <Blog />
        <Counter />
        <Services />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
