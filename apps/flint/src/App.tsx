import { useEffect } from 'react'
import { BlogPosts } from './components/BlogPosts'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

export function App() {
  useEffect(() => {
    document.title = 'Flint — Design Studio Template'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <BlogPosts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
