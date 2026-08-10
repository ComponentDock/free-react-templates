import { useEffect } from 'react'
import { BigAdd } from './components/BigAdd'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { NewsTabs } from './components/NewsTabs'
import { Sidebar } from './components/Sidebar'
import { Ticker } from './components/Ticker'
import { TopNews } from './components/TopNews'
import { VideoSection } from './components/VideoSection'

export function App() {
  useEffect(() => {
    document.title = 'Bulletin — News Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Ticker />
        <Hero />
        <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-[100px] pb-[70px] lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NewsTabs />
          </div>
          <Sidebar />
        </div>
        <VideoSection />
        <TopNews />
        <BigAdd />
      </main>
      <Footer />
    </div>
  )
}
