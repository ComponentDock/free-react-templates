import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { InstagramBand } from './components/InstagramBand'
import { Footer } from './components/Footer'

/* Single-page boutique-cafe template. Section order mirrors the source
   design top to bottom: fixed sidebar header, hero, about, menu,
   services, gallery, testimonials, instagram band and footer. */
export function App() {
  useEffect(() => {
    document.title = 'Beanery — Decoffee Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Sidebar />
      <div className="min-[1600px]:pl-[300px]">
        <main>
          <Hero />
          <About />
          <Menu />
          <Services />
          <Gallery />
          <Testimonials />
          <InstagramBand />
        </main>
        <Footer />
      </div>
    </div>
  )
}
