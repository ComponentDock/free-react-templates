import { Topbar } from './components/Topbar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { Choose } from './components/Choose'
import { Deal } from './components/Deal'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

/* Sneakly — eCommerce shoe-store one-pager.
   Section order matches the reference preview 1:1: black top strip →
   transparent navbar with catalog dropdown + cart badge → full-height hero
   slider (photo right, text left) → services row → light "New Shoes
   Arrival" product grid → choose category cards → gold deal band with
   countdown → testimonials carousel → Instagram gallery → black footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Choose />
        <Deal />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
