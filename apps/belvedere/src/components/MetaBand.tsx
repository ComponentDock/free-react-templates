import { Camera, Code2, PenLine, User, type LucideIcon } from 'lucide-react'
import { NOTES_ID, SOCIAL_LINKS, STATS, type SocialIcon } from '../data/site'

/**
 * One glyph per tile. `lucide-react` dropped its brand icons, so a tile carries
 * the same *kind* of mark (code, writing, camera, person) rather than a logo.
 * The map is keyed by the data's own union, so a lookup can never miss.
 */
const ICONS: Record<SocialIcon, LucideIcon> = {
  code: Code2,
  pen: PenLine,
  camera: Camera,
  user: User,
}

/**
 * A hairline rule, four 44 px tiles and a three-cell definition list. Its row
 * count is a copy-column fact, not a media query: tiles (200) + gap (36) + stats
 * (364) need 600 px and the column is 598.58 at 1440 — so the widest viewport
 * shows two rows. That is the design, not a bug to smooth over.
 */
export function MetaBand() {
  return (
    <div className="bv-meta" id={NOTES_ID}>
      <ul className="bv-social" aria-label="Elsewhere">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.icon]

          return (
            <li key={social.label}>
              <a
                className="bv-social-link"
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>

      <dl className="bv-stats">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
