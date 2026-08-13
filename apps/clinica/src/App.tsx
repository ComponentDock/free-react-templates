import { Preloader } from './components/Preloader'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Departments } from './components/Departments'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Appointment } from './components/Appointment'
import { GalleryStrip } from './components/GalleryStrip'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

/* Clinica — medical/hospital one-pager.
   Section order matches the reference preview 1:1: preloader → sticky
   header → 900px photo hero with rotating headline → about split →
   department tabs → medical camp gallery → split testimonials → team
   grid → appointment form → full-bleed gallery strip → blog → dark
   footer → back-to-top. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Departments />
        <Gallery />
        <Testimonials />
        <Team />
        <Appointment />
        <GalleryStrip />
        <Blog />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
