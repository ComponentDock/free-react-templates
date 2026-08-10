import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { FeaturedCarousel } from './components/FeaturedCarousel'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { InstagramStrip } from './components/InstagramStrip'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Crumb — Food & Lifestyle Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedCarousel />
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <Sidebar />
        </div>
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
