import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ParallaxQuote } from './components/ParallaxQuote'
import { YogaStyles } from './components/YogaStyles'
import { YogaClasses } from './components/YogaClasses'
import { Testimonials } from './components/Testimonials'
import { StatsBar } from './components/StatsBar'
import { BlogPosts } from './components/BlogPosts'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Namastay — Yoga Instructor Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ParallaxQuote />
        <YogaStyles />
        <YogaClasses />
        <Testimonials />
        <StatsBar />
        <BlogPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
