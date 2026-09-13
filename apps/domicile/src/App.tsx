import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Mission } from './components/Mission'
import { SuccessStats } from './components/SuccessStats'
import { ProjectShowcase } from './components/ProjectShowcase'
import { Team } from './components/Team'
import { ProjectCTA } from './components/ProjectCTA'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Domicile — Business & Finance Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Mission />
        <SuccessStats />
        <ProjectShowcase />
        <Team />
        <ProjectCTA />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
