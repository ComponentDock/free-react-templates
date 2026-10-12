import { cn } from '@free-react-templates/ui'
import { COUPLE, KICKER, photo, SECTION_IDS } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import {
  containerClass,
  heroBandClass,
  heroClass,
  heroContentClass,
  heroKickerClass,
  heroNamesClass,
  heroOrnamentClass,
  heroPhotoClass,
  heroScrimClass,
} from '../lib/styles'
import { useParallax } from '../lib/use-parallax'
import { Ornament } from './Ornament'

/**
 * The hero: the couple's photograph full-bleed under a dark wash, with the small uppercase line and
 * the names in the brand pink between two white flourishes. The photograph drifts against the
 * scroll at half rate — the design hands the layer to a parallax bundle that does the same — and
 * stops moving entirely for a visitor who asks for reduced motion.
 */
export function Hero() {
  const parallax = useParallax(!prefersReducedMotion())

  return (
    <section id={SECTION_IDS.home} className={heroClass} aria-label="The wedding day">
      <div
        data-testid="hero-photo"
        className={heroPhotoClass}
        style={{ backgroundImage: `url(${photo('trousseau-1', 1920, 1080)})`, ...parallax }}
      />
      <div className={heroScrimClass} aria-hidden="true" />
      <div className={cn(containerClass, heroContentClass)}>
        <div className={heroBandClass}>
          <Ornament className={heroOrnamentClass} />
          <h5 className={heroKickerClass}>{KICKER}</h5>
          <h3 className={heroNamesClass}>{COUPLE}</h3>
          <Ornament className={cn(heroOrnamentClass, 'rotate-180')} />
        </div>
      </div>
    </section>
  )
}
