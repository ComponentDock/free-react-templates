import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { About } from './components/About'
import { SplitFeature } from './components/SplitFeature'
import { Features } from './components/Features'
import { Impact } from './components/Impact'
import { Founders } from './components/Founders'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Refuge — Insurance Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <SplitFeature side="left" />
        <SplitFeature side="right" />
        <Features />
        <Impact />
        <Founders />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
