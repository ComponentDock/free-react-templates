import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IconBoxes } from './components/IconBoxes'
import { FeaturedCoursesHorizontal } from './components/FeaturedCoursesHorizontal'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { FeaturedCoursesGrid } from './components/FeaturedCoursesGrid'
import { NewsEvents } from './components/NewsEvents'
import { Gallery } from './components/Gallery'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'LearnPath — Online Learning Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-text">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IconBoxes />
        <FeaturedCoursesHorizontal />
        <About />
        <Testimonials />
        <FeaturedCoursesGrid />
        <NewsEvents />
        <Gallery />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
