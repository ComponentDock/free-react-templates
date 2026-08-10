import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { LoadMore } from './components/LoadMore'
import { Navbar } from './components/Navbar'

export function App() {
  useEffect(() => {
    document.title = 'Zine — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-charcoal font-sans text-[#aaa6a0]">
      <Navbar />
      <main>
        <HeroSlider />
        <div className="pt-28">
          <BlogList />
          <div className="mt-16">
            <LoadMore />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
