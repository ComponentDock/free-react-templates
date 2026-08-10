import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { MiddleHeader } from './components/MiddleHeader'
import { NavBar } from './components/NavBar'
import { BreakingNews } from './components/BreakingNews'
import { HeroGrid } from './components/HeroGrid'
import { TodayFeatured } from './components/TodayFeatured'
import { SidebarOne } from './components/SidebarOne'
import { VideoSection } from './components/VideoSection'
import { CategorySection } from './components/CategorySection'
import { CategoryGrid } from './components/CategoryGrid'
import { SidebarTwo } from './components/SidebarTwo'
import { Footer } from './components/Footer'
import { politics, sport } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Herald — News Template'
  }, [])

  return (
    <div className="bg-[#f7f7f7] font-sans text-[#111]">
      <header>
        <TopBar />
        <MiddleHeader />
        <NavBar />
      </header>
      <main>
        <BreakingNews />
        <HeroGrid />
        <section className="mx-auto max-w-[1200px] px-4 py-[30px]">
          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-12">
            <div className="lg:col-span-8">
              <TodayFeatured />
            </div>
            <div className="lg:col-span-4">
              <SidebarOne />
            </div>
          </div>
        </section>
        <VideoSection />
        <section className="mx-auto max-w-[1200px] px-4 py-[30px]">
          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-12">
            <div className="flex flex-col gap-[30px] lg:col-span-8">
              <CategorySection category={politics} />
              <CategorySection category={sport} />
              <CategoryGrid />
            </div>
            <div className="lg:col-span-4">
              <SidebarTwo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
