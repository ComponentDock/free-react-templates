import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { RecentStories } from './components/RecentStories'
import { BlogSection } from './components/BlogSection'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <HeroSlider />
        <RecentStories />
        <BlogSection />
        <About />
        <Counter />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
