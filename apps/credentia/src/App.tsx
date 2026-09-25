import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SocialLinks } from './components/SocialLinks'
import { WorkExperience } from './components/WorkExperience'
import { Education } from './components/Education'
import { References } from './components/References'
import { Portfolio } from './components/Portfolio'
import { ExtraSkills } from './components/ExtraSkills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Credentia — CV Resume Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-dark font-sans transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialLinks />
        <WorkExperience />
        <Education />
        <References />
        <Portfolio />
        <ExtraSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
