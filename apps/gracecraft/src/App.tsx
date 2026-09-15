import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EventBanner } from './components/EventBanner'
import { About } from './components/About'
import { Sermons } from './components/Sermons'
import { Mission } from './components/Mission'
import { Events } from './components/Events'
import { Donations } from './components/Donations'
import { Quote } from './components/Quote'
import { Gallery } from './components/Gallery'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gracecraft — Church Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <EventBanner />
        <About />
        <Sermons />
        <Mission />
        <Events />
        <Donations />
        <Quote />
        <Gallery />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
