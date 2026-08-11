import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeaturedCategories } from './components/FeaturedCategories'
import { ProductGrid } from './components/ProductGrid'
import { OfferBand } from './components/OfferBand'
import { SubscribeBand } from './components/SubscribeBand'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'
import { BEST_SELLERS, BEST_SELLERS_TITLE, PRODUCTS, SHOP_TITLE } from './data'

/* Settle — furniture-shop landing, recreation of ColorLib "Aranoz".
   Section order (1:1): navbar → hero slider → featured category →
   "awesome shop" grid → offer band → best sellers → subscribe band →
   client logos → footer. */
export function App() {
  return (
    <div className="font-sans text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <FeaturedCategories />
        <ProductGrid title={SHOP_TITLE} products={PRODUCTS} />
        <OfferBand />
        <ProductGrid title={BEST_SELLERS_TITLE} products={BEST_SELLERS} />
        <SubscribeBand />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
