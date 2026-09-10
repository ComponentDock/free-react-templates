import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { VideoCallout } from './components/VideoCallout'
import { BlogCards } from './components/BlogCards'
import { Story } from './components/Story'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crux — Creative Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <VideoCallout />
        <BlogCards />
        <Story />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
