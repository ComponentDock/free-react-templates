import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { LatestBlog } from './components/LatestBlog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BugGuard — Pest Control Service Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ChooseUs />
        <Counter />
        <Testimonials />
        <LatestBlog />
      </main>
      <Footer />
    </div>
  )
}
