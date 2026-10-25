import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Capabilities } from './components/Capabilities'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's band order: licence strip, sticky header, grey
 * hero, the capability matrix, the three jobs, the certification grid, the
 * three steps, the steel-blue closing band — then the footer with the cookie
 * strip and the back-to-top disc over it.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div id="top" className="min-h-screen bg-white text-ink-500 dark:bg-gray-950 dark:text-gray-200">
      <Preloader />
      <SkipLink />
      <ScrollProgress progress={progress} />
      <LicenceBar />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Capabilities />
        <Projects />
        <Certifications />
        <Process />
        <Contact />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
