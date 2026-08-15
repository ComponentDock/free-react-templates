import { AnnouncementBar } from './components/AnnouncementBar'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { LatestProducts } from './components/LatestProducts'
import { Lookbook } from './components/Lookbook'
import { LookbookCollage } from './components/LookbookCollage'
import { LogoStrip } from './components/LogoStrip'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-brand antialiased">
      <header>
        <Header />
        <AnnouncementBar />
        <HeroSlider />
      </header>
      <main>
        <div data-section="features">
          <Features />
        </div>
        <div data-section="lookbook-collage">
          <LookbookCollage />
        </div>
        <div data-section="latest-products">
          <LatestProducts />
        </div>
        <div data-section="lookbook">
          <Lookbook />
        </div>
        <div data-section="logos">
          <LogoStrip />
        </div>
      </main>
      <Footer />
    </div>
  )
}
