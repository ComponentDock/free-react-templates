import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Newsletter } from './components/Newsletter'
import { FeaturedProducts } from './components/FeaturedProducts'
import { About } from './components/About'
import { Team } from './components/Team'
import { SpecialPromo } from './components/SpecialPromo'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stall — Ecommerce Store Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Newsletter />
        <FeaturedProducts />
        <About />
        <Team />
        <SpecialPromo />
        <Services />
        <Testimonials />
        <BlogPosts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
