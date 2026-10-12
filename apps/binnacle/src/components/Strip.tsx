import { Phone } from 'lucide-react'
import { CHANNELS, CHANNELS_LABEL, PHONE_HREF, PHONE_LABEL, PHONE_NUMBER } from '../lib/site'
import {
  containerClass,
  phoneClass,
  phoneLinkClass,
  phoneMarkClass,
  socialListClass,
  stripClass,
  stripRowClass,
  tileClass,
  tileMarkClass,
} from '../lib/styles'
import { BrandIcon } from './BrandIcon'

/**
 * The dark utility strip: the design's full-bleed `#202020` band with no padding of its own,
 * carrying the phone link at the left and four `34 × 34` square tiles at the right (1px apart,
 * flush with the container's content right edge), whose height is what sets the strip's own 34px.
 * The glyphs are the design's blank squares filled in — it ships no icon font — and every one of
 * the five destinations here lands on a real block below.
 */
export function Strip() {
  return (
    <div className={stripClass} data-testid="strip">
      <div className={containerClass}>
        <div className={stripRowClass}>
          <p className={phoneClass}>
            {/* The design's own quirk: the glyph inherits the page's grey while the number is white. */}
            <Phone aria-hidden="true" className={phoneMarkClass} />
            <a href={PHONE_HREF} aria-label={PHONE_LABEL} className={phoneLinkClass}>
              {PHONE_NUMBER}
            </a>
          </p>

          <ul aria-label={CHANNELS_LABEL} className={socialListClass}>
            {CHANNELS.map((channel) => (
              <li key={channel.name}>
                <a href={channel.href} aria-label={channel.label} className={tileClass}>
                  <BrandIcon name={channel.name} className={tileMarkClass} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
