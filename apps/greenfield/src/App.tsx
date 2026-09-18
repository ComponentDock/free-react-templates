import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { BrandBar } from './components/BrandBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Projects } from './components/Projects'
import { VideoSection } from './components/VideoSection'
import { Testimonials } from './components/Testimonials'
import { RequestQuote } from './components/RequestQuote'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Greenfield — Agriculture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <TopBar />
      <BrandBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counter />
        <Projects />
        <VideoSection />
        <Testimonials />
        <RequestQuote />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
