import { Fragment } from 'react'
import { Mail, Phone } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from '../lib/site'
import { topBarLinkClass } from '../lib/styles'
import { brandIcons } from './BrandIcons'

/** The label of every utility-bar link: shown from 768px up, hidden below it. */
const BAR_LABEL = 'hidden md:inline-block'

/** The plain spacer the reference puts between the links of each group. */
const BAR_SPACER = 'hidden md:inline-block md:mx-2'

/**
 * The #eee utility bar above the header: an email and a phone link at the left,
 * a Twitter and a Facebook link pushed to the right, every link a #666666 glyph
 * with an optional text label. Below 768px only the glyphs survive, so each link
 * carries an `aria-label` and keeps an accessible name at every width.
 */
export function TopBar() {
  return (
    <div data-testid="top-bar" className="w-full bg-topbar py-2 text-topbar-link">
      <div className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="-mx-[15px] flex flex-wrap items-center">
          <div className="flex items-center px-[15px]">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={CONTACT_EMAIL}
              className={topBarLinkClass()}
            >
              <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
              <span className={BAR_LABEL}>{CONTACT_EMAIL}</span>
            </a>
            <span aria-hidden="true" className={BAR_SPACER} />
            <a
              href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`}
              aria-label={CONTACT_PHONE}
              className={topBarLinkClass()}
            >
              <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
              <span className={BAR_LABEL}>{CONTACT_PHONE}</span>
            </a>
          </div>
          <div className="ml-auto flex items-center px-[15px]">
            {SOCIAL_LINKS.map((link, index) => {
              const Glyph = brandIcons[link.icon]

              return (
                <Fragment key={link.label}>
                  {index > 0 ? <span aria-hidden="true" className={BAR_SPACER} /> : null}
                  <a href={link.href} aria-label={link.label} className={topBarLinkClass()}>
                    <Glyph className="mr-2 h-4 w-4" />
                    <span className={BAR_LABEL}>{link.label}</span>
                  </a>
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
