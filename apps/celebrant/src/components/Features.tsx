import type { LucideIcon } from 'lucide-react'
import { CalendarCheck, Church, Gem, Home, Mail, Wine } from 'lucide-react'
import { FEATURES, FEATURES_LABEL, SECTION_IDS, type FeatureGlyph } from '../lib/site'
import {
  bandClass,
  containerClass,
  featureBodyClass,
  featureCardClass,
  featureDiscClass,
  featureDiscWrapClass,
  featureGlyphClass,
  featureGridClass,
  featureTitleClass,
} from '../lib/styles'

/**
 * The glyph the design draws from its icon font for each card. `lucide-react` carries the line-art
 * stand-ins; the flaticon set itself is not redistributable and is never copied.
 */
const GLYPHS: Record<FeatureGlyph, LucideIcon> = {
  ring: Gem,
  venue: Church,
  honeymoon: Home,
  invitation: Mail,
  tasting: Wine,
  planner: CalendarCheck,
}

/**
 * Six white cards in the design's two columns: a mint disc with a black line-art glyph on it, a
 * serif title and a line of copy. The cards have no border and no shadow — only their own
 * whitespace separates them.
 */
export function Features() {
  return (
    <section id={SECTION_IDS.features} aria-label={FEATURES_LABEL} className={bandClass}>
      <div className={containerClass}>
        <div className={featureGridClass}>
          {FEATURES.map((feature) => {
            const Glyph = GLYPHS[feature.glyph]

            return (
              <article key={feature.title} className={featureCardClass}>
                <div data-testid={`feature-disc-${feature.glyph}`} aria-hidden="true" className={featureDiscWrapClass}>
                  <span className={featureDiscClass} />
                  <Glyph className={featureGlyphClass} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={featureTitleClass}>{feature.title}</h3>
                  <p className={featureBodyClass}>{feature.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
