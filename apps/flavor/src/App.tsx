import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoBar } from './components/InfoBar'
import { About } from './components/About'
import { Specialties } from './components/Specialties'
import { ParallaxIntro } from './components/ParallaxIntro'
import { Menu } from './components/Menu'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'
import { brand, specialties, specialties2 } from './data'

/* Flavor — restaurant one-pager.
   Section order: header → hero → info bar → about → specialties →
   parallax intro → specialties2 → testimonials → menu → reservation → footer. */
export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-body-grey">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoBar />
        <About />
        <Specialties heading={`Our Delicious Specialties`} dishes={specialties} />
        <ParallaxIntro />
        <Specialties heading={`${brand.name} Specialties`} dishes={specialties2} />
        <Testimonials />
        <Menu />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
