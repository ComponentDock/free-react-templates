import { CONTACT, FOOTER_LINKS, FOOTER_PACKAGES, SOCIAL_LINKS } from '../lib/site'
import { BrandGlyph } from './BrandGlyph'
import { Wordmark } from './Wordmark'

const PHOTO = 'https://picsum.photos/seed/gridhost-footer/1600/600'

const LINK_CLASS =
  'font-light text-footer-text transition-all hover:pl-[5px] hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand'

const HEADING_CLASS = 'mb-[29px] font-body text-[20px] font-medium text-white'

/**
 * The footer: a navy photo band carrying the wordmark, a package list, a quick
 * link list and a contact column whose heading slot holds the phone number
 * itself, over an e-mail row and a street address. Headings stay in the body
 * face at 20px/500 while links sit at `footer-text` weight 300; the ruled bottom
 * bar shows the year computed at render plus a single Component Dock link.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" aria-label="Site footer" className="relative bg-navy">
      <img
        src={PHOTO}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/90" />

      <div className="relative mx-auto w-full max-w-[1140px] px-[15px] pt-[100px] pb-[50px] min-[1200px]:pt-[170px]">
        <div className="flex flex-wrap justify-between gap-y-[40px]">
          <div className="w-full xl:w-3/12">
            <Wordmark className="mb-[40px]" />
          </div>

          <div className="w-full sm:w-1/2 xl:w-2/12">
            <h4 className={HEADING_CLASS}>All packages</h4>
            <ul>
              {FOOTER_PACKAGES.map((name) => (
                <li key={name} className="mb-[15px]">
                  <a href="#pricing" className={LINK_CLASS}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 xl:w-2/12">
            <h4 className={HEADING_CLASS}>Quick link</h4>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.label} className="mb-[15px]">
                  <a href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full xl:w-3/12">
            <h4 className={HEADING_CLASS}>
              <a
                href={CONTACT.telHref}
                className="transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {CONTACT.phone}
              </a>
            </h4>
            <ul>
              <li className="mb-[15px]">
                <a href={`mailto:${CONTACT.email}`} className={LINK_CLASS}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <p className="font-light text-footer-text">{CONTACT.address}</p>

            <ul className="mt-[25px] flex gap-[10px]">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`Gridhost on ${social.label}`}
                    className="grid h-[40px] w-[40px] place-items-center rounded-full border border-ring text-footer-text transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <BrandGlyph name={social.label} className="h-[16px] w-[16px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[40px] border-t border-rule-footer pt-[40px] pb-[23px]">
          <p className="text-center font-light text-footer-text">
            © {year} Gridhost — every plan on the grid. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white underline transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Component Dock
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
