import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Categories } from './components/Categories'
import { Contact } from './components/Contact'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoCta } from './components/LogoCta'
import { MapSection } from './components/MapSection'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'

const DOCUMENT_TITLE = 'Machina — Industrial & Manufacturing'

/**
 * Machina — single-page industrial & manufacturing company template
 * (recreation of ColorLib "Braxit"). Section order mirrors the source 1:1:
 * top bar → nav → hero → about → gallery → categories → services → CTA
 * banner → testimonials → enquiry + form → blog → map → logo CTA → footer.
 */
export function App() {
  useEffect(() => {
    document.title = DOCUMENT_TITLE
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Categories />
        <Services />
        <CtaBanner />
        <Testimonials />
        <Contact />
        <Blog />
        <MapSection />
        <LogoCta />
      </main>
      <Footer />
    </div>
  )
}
