import { Container } from './Container'
import { HERO_HEADING, HERO_LEAD } from '../lib/site'
import {
  heroClass,
  heroColumnClass,
  heroHeadingClass,
  heroLeadClass,
  heroRowClass,
} from '../lib/styles'

/**
 * The band the sheet is drawn over: exactly viewport height — `100vh` with the `100dvh` upgrade
 * behind `@supports` — on the design's own `#202020` charcoal, holding nothing but a centred
 * headline and a lead. Its container's gutters are zeroed, so the band runs edge-to-edge, and the
 * copy is centred by the band itself, which is what lands the headline at `y = 363.7` at 1440px.
 */
export function Hero() {
  return (
    <section className={heroClass} data-testid="hero">
      <Container flush>
        <div className={heroRowClass}>
          <div className={heroColumnClass}>
            <h1 className={heroHeadingClass}>{HERO_HEADING}</h1>
            <p className={heroLeadClass}>{HERO_LEAD}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
