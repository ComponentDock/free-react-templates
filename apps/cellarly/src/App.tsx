import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { CategoryGrid } from './components/CategoryGrid'
import { ProductGrid } from './components/ProductGrid'
import { Testimonials } from './components/Testimonials'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cellarly — Premium Spirits & Fine Beverages'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <CategoryGrid />
        <ProductGrid />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
