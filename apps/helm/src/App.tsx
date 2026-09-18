import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatWeDo } from './components/WhatWeDo'
import { Features } from './components/Features'
import { FutureDesign } from './components/FutureDesign'
import { Testimonial } from './components/Testimonial'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Helm — Technology Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Features />
        <FutureDesign />
        <Testimonial />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
