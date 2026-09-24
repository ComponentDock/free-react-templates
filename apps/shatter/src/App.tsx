import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { BannerArea } from './components/BannerArea'
import { EditorsPicks } from './components/EditorsPicks'
import { InternationalNews } from './components/InternationalNews'
import { TechNews } from './components/TechNews'
import { ExclusiveVideos } from './components/ExclusiveVideos'
import { PopularNews } from './components/PopularNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shatter — Magazine & News Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <BannerArea />
      <Navbar />
      <main className="flex-1">
        <EditorsPicks />
        <InternationalNews />
        <TechNews />
        <ExclusiveVideos />
        <PopularNews />
      </main>
      <Footer />
    </div>
  )
}
