import { useEffect } from 'react'
import { BlogSection } from './components/BlogSection'
import { CtaBand } from './components/CtaBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { Navbar } from './components/Navbar'
import { ProjectsGrid } from './components/ProjectsGrid'
import { Services } from './components/Services'
import { SplitBlock } from './components/SplitBlock'
import { Testimonials } from './components/Testimonials'

export function App() {
  useEffect(() => {
    document.title = 'Millwright — Industries Template'
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <HeroSlider />
        <Features />
        <Services />
        <SplitBlock />
        <ProjectsGrid />
        <Testimonials />
        <BlogSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
