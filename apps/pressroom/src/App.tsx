import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { MidBar } from './components/MidBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatsNew } from './components/WhatsNew'
import { BannerAd } from './components/BannerAd'
import { MostRecent } from './components/MostRecent'
import { TrendingNews } from './components/TrendingNews'
import { VideoSection } from './components/VideoSection'
import { OldSpondon } from './components/OldSpondon'
import { Footer } from './components/Footer'
import { BANNER_ONE, BANNER_TWO } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Pressroom — News & Magazine'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <TopBar />
      <MidBar />
      <Navbar />
      <main>
        <Hero />
        <WhatsNew />
        <div className="mt-4">
          <BannerAd image={BANNER_ONE} />
        </div>
        <MostRecent />
        <TrendingNews />
        <VideoSection />
        <OldSpondon />
        <div className="bg-surface py-10">
          <BannerAd image={BANNER_TWO} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
