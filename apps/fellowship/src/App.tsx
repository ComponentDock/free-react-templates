import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestSermon } from './components/LatestSermon'
import { Welcome } from './components/Welcome'
import { Features } from './components/Features'
import { ChurchServices } from './components/ChurchServices'
import { LatestSermonsEvents } from './components/LatestSermonsEvents'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fellowship — Church Community'
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LatestSermon />
        <Welcome />
        <Features />
        <ChurchServices />
        <LatestSermonsEvents />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
