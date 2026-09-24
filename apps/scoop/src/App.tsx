import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { LogoHeader } from './components/LogoHeader'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { EditorsChoice } from './components/EditorsChoice'
import { LatestNews } from './components/LatestNews'
import { TravelFood } from './components/TravelFood'
import { WeddingAdventure } from './components/WeddingAdventure'
import { MostPopularNews } from './components/MostPopularNews'
import { SocialNetworks } from './components/SocialNetworks'
import { Newsletter } from './components/Newsletter'
import { ProductListArea } from './components/ProductListArea'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Scoop — News & Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-section-bg font-sans text-body">
      <TopBar />
      <LogoHeader />
      <Navbar />
      <main>
        <HeroBanner />
        <EditorsChoice />
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-12">
                <LatestNews />
                <TravelFood />
                <WeddingAdventure />
              </div>
              <aside className="lg:col-span-4">
                <MostPopularNews />
                <SocialNetworks />
                <Newsletter />
              </aside>
            </div>
          </div>
        </section>
        <ProductListArea />
      </main>
      <Footer />
    </div>
  )
}
