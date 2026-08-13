import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { MenuSection } from './components/MenuSection'
import { Reservation } from './components/Reservation'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Sizzle — restaurant one-pager.
   Section order matches the reference preview 1:1: header → hero banner →
   about → menu + filters → reservation → gallery + filters → reviews →
   blog → footer. */
export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-body-grey">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <MenuSection />
        <Reservation />
        <Gallery />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
