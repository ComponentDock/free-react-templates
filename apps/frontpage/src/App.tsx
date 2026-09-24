import { useEffect } from 'react'
import { HeaderTopBar } from './components/HeaderTopBar'
import { HeaderMiddle } from './components/HeaderMiddle'
import { Navbar } from './components/Navbar'
import { TrendingArea } from './components/TrendingArea'
import { WeeklyTopNews } from './components/WeeklyTopNews'
import { WhatsNew } from './components/WhatsNew'
import { WeeklyTopNews2 } from './components/WeeklyTopNews2'
import { RecentArticles } from './components/RecentArticles'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FrontPage — News & Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <HeaderTopBar />
      <HeaderMiddle />
      <Navbar />
      <main>
        <TrendingArea />
        <WeeklyTopNews />
        <WhatsNew />
        <WeeklyTopNews2 />
        <RecentArticles />
      </main>
      <Footer />
    </div>
  )
}
