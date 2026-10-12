import { Heart } from 'lucide-react'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  DOT,
  FOOTER_ADDRESS,
  FOOTER_BLURB,
  FOOTER_COLUMNS,
  FOOTER_CREDIT,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_TAGLINE,
  INSTAGRAM,
  INSTAGRAM_HEADING,
  SECTION_IDS,
  SKIP_TARGET,
  photo,
} from '../lib/site'
import {
  brandDotClass,
  containerClass,
  dockLinkClass,
  footerBrandClass,
  footerBlurbClass,
  footerClass,
  footerCopyClass,
  footerGridClass,
  footerHeadingClass,
  footerInfoClass,
  footerInnerClass,
  footerLinkClass,
  footerListClass,
  footerRuleClass,
  instagramCellClass,
  instagramGridClass,
  instagramImgClass,
} from '../lib/styles'

/**
 * The foot of the page: the wordmark with a short blurb and the studio's own details, two columns of
 * links, a small grid of recent work, and the closing rule over the copyright line — which carries
 * the one link back to Component Dock and the current year.
 */
export function Footer() {
  return (
    <footer className={footerClass}>
      <div className={containerClass}>
        <div className={footerInnerClass}>
          <div className={footerGridClass}>
            <div id={SECTION_IDS.contact}>
              <a href={SKIP_TARGET} className={footerBrandClass} aria-label={`${BRAND} — back to the top`}>
                {BRAND}
                <span className={brandDotClass}>{DOT}</span>
              </a>
              <p className={footerBlurbClass}>{FOOTER_BLURB}</p>
              <p className={footerInfoClass}>{FOOTER_EMAIL}</p>
              <p className={footerInfoClass}>{FOOTER_PHONE}</p>
              <p className={footerInfoClass}>{FOOTER_ADDRESS}</p>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h4 className={footerHeadingClass}>{column.heading}</h4>
                <ul className={footerListClass}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href={SKIP_TARGET} className={footerLinkClass}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className={footerHeadingClass}>{INSTAGRAM_HEADING}</h4>
              <ul className={instagramGridClass} data-testid="instagram-grid">
                {INSTAGRAM.map((shot) => (
                  <li key={shot.photo}>
                    <a href={SKIP_TARGET} className={instagramCellClass} aria-label={shot.caption}>
                      <img
                        src={photo(shot.photo, 180, 180)}
                        alt={shot.caption}
                        className={instagramImgClass}
                        loading="lazy"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={footerRuleClass}>
            <p className={footerCopyClass}>
              © {new Date().getFullYear()} {BRAND}. {FOOTER_CREDIT}{' '}
              <Heart className="inline h-[14px] w-[14px] text-brand" aria-hidden="true" /> {FOOTER_TAGLINE}{' '}
              <a href={COMPONENT_DOCK_URL} className={dockLinkClass} target="_blank" rel="noreferrer">
                {COMPONENT_DOCK_LABEL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
