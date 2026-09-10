import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VideoCta } from './components/VideoCta'
import { About } from './components/About'
import { Features } from './components/Features'
import { FaqStats } from './components/FaqStats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lightwell'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VideoCta />
        <About />
        <Features />
        <FaqStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
