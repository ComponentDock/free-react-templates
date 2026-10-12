import { CHANNELS, SOCIAL_LABEL } from '../lib/site'
import { circleClass, circleMarkClass, socialListClass } from '../lib/styles'
import { BrandIcon } from './BrandIcon'

/**
 * The chrome row's own row of circles: four `40 × 40` rings, 1px apart from each other by their
 * own right margin, sitting flush with the content's left edge and **top-aligned** with the
 * chrome row rather than centred in it — the column is the taller box, and the circles hang from
 * its top. The glyphs are the design's blank rings filled in (it ships no icon font), and every
 * one of the four lands on a real card in the channels block below.
 */
export function SocialRow() {
  return (
    <ul aria-label={SOCIAL_LABEL} className={socialListClass} data-testid="social">
      {CHANNELS.map((channel) => (
        <li key={channel.name}>
          <a href={channel.href} aria-label={channel.label} className={circleClass}>
            <BrandIcon name={channel.name} className={circleMarkClass} />
          </a>
        </li>
      ))}
    </ul>
  )
}
