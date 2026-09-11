import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Faq } from './components/Faq'
import { Testimonial } from './components/Testimonial'
import { Partners } from './components/Partners'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BuildWell — Construction Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <Services />
        <Faq />
        <Testimonial />
        <Partners />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
