import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Sermons } from './components/Sermons'
import { Events } from './components/Events'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crescent — Church Community Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-body-text">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <CallToAction />
        <Sermons />
        <Events />
        <Gallery />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
