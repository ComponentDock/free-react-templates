import { Hero } from './components/Hero'
import { LogoCloud } from './components/LogoCloud'
import { Mesh } from './components/Mesh'
import { PageFooter } from './components/PageFooter'
import { SiteHeader } from './components/SiteHeader'

/**
 * Afterglow — one product hero on a four-blob pastel mesh and one logo cloud,
 * and nothing else: no features grid, no testimonial band, no pricing table, no
 * third CTA. The mandatory footer sits outside the full-height root so the
 * one-screen page keeps its own height.
 */
export function App() {
  return (
    <>
      <div className="ag-root">
        <Mesh />
        <SiteHeader />

        <main className="ag-main">
          <Hero />
          <LogoCloud />
        </main>
      </div>

      <PageFooter />
    </>
  )
}
