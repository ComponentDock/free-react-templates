import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Timeline } from './components/Timeline'
import { QuoteBand } from './components/QuoteBand'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { education, experience } from './data'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-neon focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Timeline heading="Experience" entries={experience} compact />
        <QuoteBand />
        <Timeline heading="Education" entries={education} />
        <Gallery />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
