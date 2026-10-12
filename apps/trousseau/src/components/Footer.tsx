import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_CREDIT,
  FOOTER_NAV,
  FOOTER_TAGLINE,
  SKIP_TARGET,
  SOCIALS,
} from '../lib/site'
import {
  brandMarkClass,
  brandWordClass,
  containerClass,
  creditClass,
  dockLinkClass,
  footerBrandClass,
  footerClass,
  footerInnerClass,
  footerLinkClass,
  footerMenuClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'
import { BrandMark } from './BrandMark'
import { SocialIcon } from './SocialIcon'

/**
 * The foot of the page on its own soft band: the wordmark, the same menu as the header, the social
 * row, and the credit line that carries the current year and the link back to Component Dock.
 */
export function Footer() {
  return (
    <footer className={footerClass}>
      <div className={containerClass}>
        <div className={footerInnerClass}>
          <a href={SKIP_TARGET} className={footerBrandClass} aria-label={`${BRAND} — back to the top`}>
            <BrandMark className={brandMarkClass} />
            <span className={brandWordClass}>{BRAND}</span>
          </a>

          <ul className={footerMenuClass}>
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={footerLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className={socialRowClass}>
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className={socialLinkClass}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>

          <p className={creditClass}>
            © {new Date().getFullYear()} {BRAND}. {FOOTER_CREDIT} {FOOTER_TAGLINE}{' '}
            <a href={COMPONENT_DOCK_URL} className={dockLinkClass} target="_blank" rel="noreferrer">
              {COMPONENT_DOCK_LABEL}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
