import { Hero } from './components/Hero'
import { PageFooter } from './components/PageFooter'
import { SiteHeader } from './components/SiteHeader'

/**
 * Tendril — one app-landing hero and nothing else below the mandatory footer:
 * no photography, no second section and no image file anywhere. The bar, the
 * copy column and the two-phone product shot live inside the 100vh shell; the
 * Component Dock line sits outside it, so the hero's measurements still hold.
 */
export function App() {
  return (
    <>
      <div className="td-root">
        <SiteHeader />

        <main className="td-main">
          <Hero />
        </main>
      </div>

      <PageFooter />
    </>
  )
}
