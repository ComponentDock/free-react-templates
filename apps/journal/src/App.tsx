import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { InstagramFeed } from './components/InstagramFeed'
import { MagazineIntro } from './components/MagazineIntro'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'

/** Journal — lifestyle blog template (recreation of ColorLib "Original").
 *  Section order mirrors the reference 1:1: top bar → logo → sticky nav →
 *  hero carousel → magazine intro → blog list + sidebar → instagram strip →
 *  footer (+ newsletter modal from the nav). */
export function App() {
  useEffect(() => {
    document.title = 'Journal — Lifestyle Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <div className="mx-auto max-w-6xl px-4 pt-[100px] lg:px-6">
          <MagazineIntro />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-[100px] lg:px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <BlogList />
            </div>
            <div className="lg:col-span-3">
              <Sidebar />
            </div>
          </div>
        </div>
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
