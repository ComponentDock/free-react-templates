import { Heart } from 'lucide-react'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  CONTACT_PHONE,
  FOOTER_BLURB,
  FOOTER_COLUMNS,
  FOOTER_CREDIT,
  LOCATION_TITLE,
  SOCIALS,
  VENUE_ADDRESS,
} from '../lib/site'
import {
  dockLinkClass,
  footerBlurbClass,
  footerClass,
  footerColumnClass,
  footerContactClass,
  footerCopyClass,
  footerHairlineClass,
  footerHeadingClass,
  footerHeartClass,
  footerInnerClass,
  footerLinkClass,
  footerListItemClass,
  footerListClass,
  footerRowClass,
  footerWordmarkClass,
  footerWordmarkColumnClass,
  socialGlyphClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'

/** The digits a phone link needs: nothing but the dialling characters survive. */
function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

/**
 * The foot of the page: the near-black damask band with the wordmark, its blurb and the social row in
 * the first column, the two link columns and the location column beside it, then the hairline and the
 * centred copyright line whose credit links Component Dock in place of the design's own attribution.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={footerClass}>
      <div className={footerInnerClass}>
        <div className={footerRowClass}>
          <div className={footerWordmarkColumnClass}>
            <p className={footerWordmarkClass}>{BRAND}</p>
            <p className={footerBlurbClass}>{FOOTER_BLURB}</p>
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

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className={footerColumnClass}>
              <h2 className={footerHeadingClass}>{column.title}</h2>
              <ul className={footerListClass}>
                {column.items.map((item) => (
                  <li key={item.label} className={footerListItemClass}>
                    <a href={item.href} className={footerLinkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={footerColumnClass}>
            <h2 className={footerHeadingClass}>{LOCATION_TITLE}</h2>
            <address className={footerContactClass}>
              <span className="block">{VENUE_ADDRESS}</span>
              <a href={`tel:${dialable(CONTACT_PHONE)}`} className={footerLinkClass}>
                {CONTACT_PHONE}
              </a>
            </address>
          </div>
        </div>

        <div className={footerHairlineClass}>
          <p className={footerCopyClass}>
            <Heart aria-hidden="true" className={footerHeartClass} />
            {` © ${year} ${BRAND}. ${FOOTER_CREDIT} `}
            <a href={COMPONENT_DOCK_URL} target="_blank" rel="noreferrer" className={dockLinkClass}>
              {COMPONENT_DOCK_LABEL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
