import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureGrid } from './components/FeatureGrid'
import { FeatureBig } from './components/FeatureBig'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Liftoff — Landing Page Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <FeatureBig />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
