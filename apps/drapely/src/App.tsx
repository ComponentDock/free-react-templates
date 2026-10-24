import { hero } from './data'
import { Navbar } from './components/Navbar'
import { SplitHero } from './components/SplitHero'
import { Collections } from './components/Collections'
import { PopularProducts } from './components/PopularProducts'
import { MostRated } from './components/MostRated'
import { Footer } from './components/Footer'

/* Drapely — fashion/footwear storefront one-pager.
   Section order matches the reference preview 1:1: white navbar with boxed
   wordmark → split hero on a light band → category collage → popular product
   grid → most-rated carousel → second split hero → four-block footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <SplitHero id="home" title={hero.primary.title} seed={hero.primary.seed} />
        <Collections />
        <PopularProducts />
        <MostRated />
        <SplitHero id="new-shoes" title={hero.secondary.title} seed={hero.secondary.seed} />
      </main>
      <Footer />
    </div>
  )
}
