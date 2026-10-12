import { Heart } from 'lucide-react'
import { BrandMark } from './brand-mark'
import { SocialGlyph } from './social-icons'
import {
  BRAND,
  BRAND_SUBLINE,
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_CREDIT_PREFIX,
  FOOTER_NOTE,
  FOOTER_SOCIALS,
  TOP_TARGET,
} from '../lib/site'
import {
  brandMarkClass,
  containerClass,
  footerClass,
  footerCopyrightClass,
  footerLinkClass,
  footerMarkClass,
  footerSocialClass,
  footerSocialsClass,
  footerTextClass,
  socialGlyphClass,
} from '../lib/styles'

/** The foot of the page: the monogram again, the year, the four circle socials and the one
 * outbound credit the whole collection carries. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={footerClass} data-testid="footer">
      <div className={containerClass}>
        <div className="text-center">
          <div className={footerMarkClass}>
            <BrandMark className={brandMarkClass} />
            <a href={TOP_TARGET} className="inline-flex flex-col items-center gap-1">
              <span className="text-[24px] leading-none font-medium text-ink">{BRAND}</span>
              <span className={footerTextClass}>{BRAND_SUBLINE}</span>
            </a>
          </div>

          <p className={footerCopyrightClass}>
            Copyright © {year} {BRAND}. {FOOTER_NOTE}{' '}
            <Heart className="footnote-heart inline-block h-[14px] w-[14px] align-[-2px]" aria-hidden="true" />
          </p>

          <p className={footerTextClass}>
            {FOOTER_CREDIT_PREFIX}{' '}
            <a href={DOCK_URL} className={footerLinkClass} target="_blank" rel="noreferrer">
              {DOCK_LABEL}
            </a>
          </p>

          <ul className={footerSocialsClass}>
            {FOOTER_SOCIALS.map((social) => (
              <li key={social.kind}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className={footerSocialClass}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialGlyph kind={social.kind} className={socialGlyphClass} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
