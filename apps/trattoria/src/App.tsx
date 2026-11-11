import { HeroMedia } from './components/HeroMedia'
import { RestaurantHero } from './components/RestaurantHero'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

/**
 * Trattoria — one restaurant screen: a full-bleed dining-room photograph under a
 * two-axis dark wash, a three-track bar with a centred serif wordmark, and a hero
 * pairing the copy column with a translucent opening-hours card. The Component
 * Dock line sits outside the 100vh shell.
 */
export function App() {
  return (
    <>
      <div className="tt-shell">
        <HeroMedia />
        <SiteHeader />

        <main className="tt-main">
          <RestaurantHero />
        </main>
      </div>

      <SiteFooter />
    </>
  )
}
