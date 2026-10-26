import { ArrowRight } from 'lucide-react'
import { CTA, INTRO, SERVICES } from '../data/site'

/**
 * The foot: intro paragraph, numbered services, pill CTA — bottom-aligned by the
 * grid and pushed down by `margin-top: auto`, which is the only thing that makes
 * the page exactly one screen tall (12.01 px of slack at 1440, 0 at 1100,
 * 97.64 at 768).
 *
 * The numerals are `aria-hidden`: a screen reader should read "Identity
 * systems", not "zero one Identity systems".
 */
export function HeroFoot() {
  return (
    <div className="pw-foot">
      <p className="pw-intro">{INTRO}</p>

      <ol className="pw-services">
        {SERVICES.map((service) => (
          <li key={service.index} className="pw-service">
            <span className="pw-num" aria-hidden="true">
              {service.index}
            </span>
            {service.label}
          </li>
        ))}
      </ol>

      <a href={CTA.href} className="pw-cta">
        {CTA.label}
        <ArrowRight size={22} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </div>
  )
}
