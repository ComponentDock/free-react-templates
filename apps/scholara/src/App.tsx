import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Programs } from './components/Programs'
import { Resources } from './components/Resources'
import { TopStories } from './components/TopStories'
import { Partners } from './components/Partners'
import { Trusted } from './components/Trusted'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  useEffect(() => {
    document.title = 'Scholara — Education Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <Resources />
        <TopStories />
        <Partners />
        <Trusted />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
