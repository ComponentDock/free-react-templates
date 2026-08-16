import { Sidebar } from './components/Sidebar'
import { MobileMenu } from './components/MobileMenu'
import { Hero } from './components/Hero'
import { SpecialOffers } from './components/SpecialOffers'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/** Epicure — a fine-dining restaurant template: fixed sidebar rail,
 *  hero, special offers, about, testimonials and footer. */
export function App() {
  return (
    <>
      <Sidebar />
      <MobileMenu />
      <div className="xl:ml-[280px]">
        <main>
          <Hero />
          <SpecialOffers />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  )
}
