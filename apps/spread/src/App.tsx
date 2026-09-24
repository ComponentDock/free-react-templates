import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroCarousel } from './components/HeroCarousel'
import { FeaturedVideo } from './components/FeaturedVideo'
import { TrendingNow } from './components/TrendingNow'
import { FeaturedVideos } from './components/FeaturedVideos'
import { MostViewedVideos } from './components/MostViewedVideos'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Spread — Video & Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-section-bg font-sans text-body">
      <Navbar />
      <main>
        <HeroCarousel />
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <FeaturedVideo />
                <TrendingNow />
                <FeaturedVideos />
                <MostViewedVideos />
              </div>
              <div className="lg:col-span-5">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
