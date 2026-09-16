import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Causes } from './components/Causes'
import { Quote } from './components/Quote'
import { Sermon } from './components/Sermon'
import { Newsletter } from './components/Newsletter'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SacredGate — Church Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <Causes />
        <Quote />
        <Sermon />
        <Newsletter />
        <News />
      </main>
      <Footer />
    </div>
  )
}
