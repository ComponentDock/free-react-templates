import { DashboardMock } from './components/DashboardMock'
import { FloatingToast } from './components/FloatingToast'
import { HeroCopy } from './components/HeroCopy'
import { PageFooter } from './components/PageFooter'
import { SiteHeader } from './components/SiteHeader'
import { HERO_ID } from './data/hero'

/**
 * Proscenium — one 100vh screen and nothing else: a transparent bar over a
 * three-layer ground, a 1 : 1.1 hero whose right column is a dashboard drawn in
 * CSS, and one floating toast. The reference has no second band, so the port
 * adds no features grid, no pricing table and no second CTA — only the
 * mandatory footer under the band.
 */
export function App() {
  return (
    <>
      <div className="hero-ground hero-motion relative flex min-h-[100svh] flex-col overflow-hidden text-[16px] leading-[1.55] text-ink">
        <SiteHeader />

        <main className="relative z-[1] flex flex-1 items-center">
          <section id={HERO_ID} aria-labelledby={`${HERO_ID}-title`} className="hero-section">
            <HeroCopy />
            <div className="hero-visual relative">
              <DashboardMock />
              <FloatingToast />
            </div>
          </section>
        </main>
      </div>

      <PageFooter />
    </>
  )
}
