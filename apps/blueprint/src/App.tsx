import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Collaborate } from './components/Collaborate'
import { Steps } from './components/Steps'
import { Stats } from './components/Stats'
import { Blog } from './components/Blog'
import { Trust } from './components/Trust'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Blueprint — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Collaborate />
        <Steps />
        <Stats />
        <Blog />
        <Trust />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
