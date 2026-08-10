import { useEffect } from 'react'
import { AdWidget } from './components/AdWidget'
import { Footer } from './components/Footer'
import { LatestNews } from './components/LatestNews'
import { LogoStrip } from './components/LogoStrip'
import { Navbar } from './components/Navbar'
import { NewsTicker } from './components/NewsTicker'
import { PopularPosts } from './components/PopularPosts'
import { RelevantStories } from './components/RelevantStories'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { TopPosts } from './components/TopPosts'

export function App() {
  useEffect(() => {
    document.title = 'Lede — News Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-page font-sans text-body">
      <header>
        <TopBar />
        <LogoStrip />
        <Navbar />
      </header>
      <main>
        <TopPosts />
        <div className="mx-auto max-w-6xl px-5">
          <NewsTicker />
        </div>
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <LatestNews />
              <AdWidget />
              <PopularPosts />
              <RelevantStories />
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
