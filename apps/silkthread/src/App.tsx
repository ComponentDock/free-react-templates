import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Banner } from './components/Banner'
import { Products } from './components/Products'
import { Categories } from './components/Categories'
import { Instagram } from './components/Instagram'
import { LatestBlog } from './components/LatestBlog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = "SilkThread — Men's Fashion"
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <Header />
      <main>
        <Hero />
        <Banner />
        <Products />
        <Categories />
        <Instagram />
        <LatestBlog />
      </main>
      <Footer />
    </div>
  )
}
