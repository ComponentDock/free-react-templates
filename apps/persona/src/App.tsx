import { useEffect } from 'react'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

/** Persona — personal branding website template (recreation of the ColorLib
 *  "Personal Wordpress Themes" category design). Section order mirrors the
 *  reference nav 1:1: fixed header → hero (+ floating action bar) → services →
 *  projects → clients → experience → contact → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Persona — Personal Branding Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
