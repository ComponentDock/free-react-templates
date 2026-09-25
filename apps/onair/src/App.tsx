import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Blog } from './components/Blog'
import { MusicCharts } from './components/MusicCharts'
import { TrendingVideo } from './components/TrendingVideo'
import { AppDownload } from './components/AppDownload'
import { WeeklySchedule } from './components/WeeklySchedule'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Blog />
        <MusicCharts />
        <TrendingVideo />
        <AppDownload />
        <WeeklySchedule />
        <LatestNews />
      </main>
      <Footer />
    </>
  )
}
