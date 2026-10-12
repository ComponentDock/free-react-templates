import { Heart } from 'lucide-react'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  COPYRIGHT_BY,
  COPYRIGHT_PREFIX,
  COPYRIGHT_TAIL,
  FOOTER_BLURB,
  FOOTER_LINKS,
  SOCIALS,
} from '../lib/site'
import {
  dockLinkClass,
  footerBlurbClass,
  footerClass,
  footerCopyClass,
  footerHairlineClass,
  footerHeartClass,
  footerInnerClass,
  footerLinkClass,
  footerMenuClass,
  footerRowClass,
  footerWordmarkClass,
  socialGlyphClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'

/**
 * The foot of the page: the wordmark and its blurb with the social row, the four section labels
 * beside them, and the design's centred copyright line — whose year the original writes at runtime,
 * and whose credit now belongs to Component Dock.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={footerClass}>
      <div className={footerInnerClass}>
        <div className={footerRowClass}>
          <div>
            <p className={footerWordmarkClass}>{BRAND}</p>
            <p className={footerBlurbClass}>{FOOTER_BLURB}</p>
            <ul className={socialRowClass}>
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={COMPONENT_DOCK_URL}
                    className={socialLinkClass}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className={socialGlyphClass}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className={footerMenuClass}>
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={footerLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={footerHairlineClass}>
          <p className={footerCopyClass} data-testid="copyright">
            {`${COPYRIGHT_PREFIX} `}
            {year}
            {` ${COPYRIGHT_TAIL} `}
            <Heart aria-hidden="true" className={footerHeartClass} />
            {` ${COPYRIGHT_BY} `}
            <a href={COMPONENT_DOCK_URL} target="_blank" rel="noreferrer" className={dockLinkClass}>
              {COMPONENT_DOCK_LABEL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
