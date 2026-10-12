import { useEffect } from 'react'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marriages } from './components/Marriages'
import { Preloader } from './components/Preloader'
import { Services } from './components/Services'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Celebrant — one page from the white bar at the top to the dark foot at the bottom: the cover
 * photograph and its mint band, the four services, the couples' band on its mint panel, the six
 * cards and the seven questions, with the design's first-paint cover over all of it.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <Preloader />
      <Header />

      <main>
        <Hero />
        <Services />
        <Marriages />
        <Features />
        <Faq />
      </main>

      <Footer />
    </div>
  )
}
