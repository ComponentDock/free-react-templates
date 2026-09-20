import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Collections } from './components/Collections'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bespoke — Fashion Boutique Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <HeroSlider />
        <Collections />
        <About />
        <Testimonials />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
