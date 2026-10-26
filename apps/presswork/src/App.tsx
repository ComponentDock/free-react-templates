import { Hero } from './components/Hero'
import { PageFooter } from './components/PageFooter'
import { SiteHeader } from './components/SiteHeader'

/**
 * Presswork — one editorial hero screen and nothing else: no photography, no
 * gradient field, no second section and no JavaScript. The header, the kicker,
 * the three-line headline with its rotating stamp and the three-column foot all
 * live inside the 100vh shell; the mandatory footer sits outside it.
 */
export function App() {
  return (
    <>
      <div className="pw-root">
        <SiteHeader />

        <main className="pw-main">
          <Hero />
        </main>
      </div>

      <PageFooter />
    </>
  )
}
