import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_TITLE,
  FOOTER_BLURB,
  FOOTER_COLUMNS,
  FOOTER_CREDIT,
  FOOTER_TAGLINE,
  SOCIALS,
} from '../lib/site'
import {
  dockLinkClass,
  footerBlurbClass,
  footerClass,
  footerColumnsClass,
  footerContactClass,
  footerCreditClass,
  footerHeadingClass,
  footerInnerClass,
  footerLinkClass,
  footerListItemClass,
  footerListClass,
  footerWordmarkClass,
  socialGlyphClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'
import { SocialIcon } from './SocialIcon'

/** The digits a phone link needs: nothing but the dialling characters survive. */
function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

/**
 * The foot of the page: the design's brand-pink band with the wordmark and its blurb, the social
 * row, the Links and Services columns, the contact column, and the copyright line whose credit
 * links Component Dock instead of the design's own attribution.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={footerClass}>
      <div className={footerInnerClass}>
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
                <SocialIcon name={social.name} className={socialGlyphClass} />
              </a>
            </li>
          ))}
        </ul>

        <div className={footerColumnsClass}>
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className="m-0">
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
          <div className="m-0">
            <h2 className={footerHeadingClass}>{CONTACT_TITLE}</h2>
            <address className={footerContactClass}>
              {CONTACT_ADDRESS.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a href={`tel:${dialable(CONTACT_PHONE)}`} className={footerLinkClass}>
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className={footerLinkClass}>
                {CONTACT_EMAIL}
              </a>
            </address>
          </div>
        </div>

        <p className={footerCreditClass}>
          {`© ${year} ${BRAND}. ${FOOTER_CREDIT} ${FOOTER_TAGLINE} `}
          <a href={COMPONENT_DOCK_URL} target="_blank" rel="noreferrer" className={dockLinkClass}>
            {COMPONENT_DOCK_LABEL}
          </a>
        </p>
      </div>
    </footer>
  )
}
