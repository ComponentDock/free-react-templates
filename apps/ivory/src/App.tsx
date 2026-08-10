import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Branding } from './components/Branding'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { SubscribeBadge } from './components/SubscribeBadge'
import { BlogList } from './components/BlogList'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ivory — Personal Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <TopBar />
      <Branding />
      <Navbar />
      <main>
        <div className="relative">
          <HeroSlider />
          <SubscribeBadge />
        </div>
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-[100px] pt-[165px] lg:grid-cols-12 lg:pt-0">
          <div className="lg:col-span-9">
            <BlogList />
            <Pagination />
          </div>
          <div className="lg:col-span-3">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
