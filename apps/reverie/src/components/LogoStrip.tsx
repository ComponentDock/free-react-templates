import { LOGO_STRIP_LABEL, VENDORS } from '../lib/site'
import { logoItemClass, logoStripClass, logoTrackClass } from '../lib/styles'

/** The band's track carries its ten wordmarks twice, so the drift loops without a visible seam. */
const LOOP = [...VENDORS, ...VENDORS]

/**
 * The light vendor band: ten monochrome wordmarks drifting past, pausing while the visitor hovers
 * and standing still entirely when they have asked for reduced motion.
 */
export function LogoStrip() {
  return (
    <div className={logoStripClass} role="group" aria-label={LOGO_STRIP_LABEL}>
      <ul className={logoTrackClass}>
        {LOOP.map((vendor, index) => (
          <li
            key={`${vendor}-${index}`}
            className={logoItemClass}
            aria-hidden={index >= VENDORS.length ? 'true' : undefined}
          >
            {vendor}
          </li>
        ))}
      </ul>
    </div>
  )
}
