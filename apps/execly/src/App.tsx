import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Portfolio } from './components/Portfolio'
import { Stats } from './components/Stats'
import { RecentWorks } from './components/RecentWorks'
import { Brands } from './components/Brands'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { documentTitle } from './data'

/* Execly — corporate business landing page (ColorLib "Corporate" recreation).
   Section order matches the preview 1:1: header → hero → about → services →
   features → portfolio → stats → recent works → brands → contact → footer. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-body-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[950] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Stats />
        <RecentWorks />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
