import { useEffect } from 'react'
import { BannerSlider } from './components/BannerSlider'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InstagramStrip } from './components/InstagramStrip'
import { PostGrid } from './components/PostGrid'
import { Sidebar } from './components/Sidebar'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Sojourn — Travel Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <BannerSlider />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <PostGrid />
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
