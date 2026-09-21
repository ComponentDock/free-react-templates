import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestPreview } from './components/LatestPreview'
import { UpdateNews } from './components/UpdateNews'
import { VideoGuide } from './components/VideoGuide'
import { InstagramPosts } from './components/InstagramPosts'
import { Footer } from './components/Footer'

/* Fragstorm — a gaming magazine template. Section order mirrors the
   source template 1:1: topbar → logo → navbar → hero → latest preview →
   update news → video guide → instagram posts → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Fragstorm — Gaming Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg font-sans text-text-primary">
      <TopBar />
      <Logo />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LatestPreview />
        <UpdateNews />
        <VideoGuide />
        <InstagramPosts />
      </main>
      <Footer />
    </div>
  )
}
