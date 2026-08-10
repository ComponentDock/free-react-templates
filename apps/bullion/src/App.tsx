import { useEffect } from 'react'
import { CryptoMining } from './components/CryptoMining'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroMosaic } from './components/HeroMosaic'
import { RecentNews } from './components/RecentNews'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'

export function App() {
  useEffect(() => {
    document.title = 'Bullion — Crypto News Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <header>
        <TopBar />
        <Header />
      </header>
      <main>
        <HeroMosaic />
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-14 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <RecentNews />
            <CryptoMining />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
