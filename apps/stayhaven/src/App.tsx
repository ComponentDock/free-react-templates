import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { About } from './components/About'
import { Team } from './components/Team'
import { Rooms } from './components/Rooms'
import { PhotoSlider } from './components/PhotoSlider'
import { MenuTabs } from './components/MenuTabs'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Contact } from './components/Contact'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

/* Full page composition in the original's section order: navbar → hero →
   booking bar → about → team → rooms → photos → menus → testimonials →
   events → contact → CTA band → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Stayhaven — Hotel & Travel'
  }, [])

  return (
    <main className="font-sans text-smoke antialiased">
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Team />
      <Rooms />
      <PhotoSlider />
      <MenuTabs />
      <Testimonials />
      <Events />
      <Contact />
      <CtaBand />
      <Footer />
    </main>
  )
}
