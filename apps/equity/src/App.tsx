import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedStrip } from './components/FeaturedStrip'
import { Investors } from './components/Investors'
import { About } from './components/About'
import { Services } from './components/Services'
import { Leadership } from './components/Leadership'
import { Press } from './components/Press'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Equity — Investment Consulting Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedStrip />
        <Investors />
        <About />
        <Services />
        <Leadership />
        <Press />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
