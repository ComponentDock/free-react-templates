import { About } from './components/About'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MapSection } from './components/MapSection'
import { Schedule } from './components/Schedule'
import { Speakers } from './components/Speakers'
import { Stats } from './components/Stats'

/* Confab — conference / design-week event one-pager. Section order mirrors
   the recreated source design 1:1: fixed transparent header, hero slider
   with video modal, stats band, speakers, about, schedule tabs, blog,
   sponsor marks, map, dark newsletter footer. Brand palette: neon yellow
   #ffbd00 + pink #ff60ce over near-black surfaces. */
export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Speakers />
        <About />
        <Schedule />
        <Blog />
        <Brands />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
