import { Heart } from 'lucide-react'
import { InstagramMark, TwitterMark } from './BrandIcons'

const PAGES = ['Blog', 'About', 'Contact'] as const
const RESOURCES = ['Blog', 'About', 'Contact'] as const

const SOCIALS = [
  { label: 'Twitter', Mark: TwitterMark },
  { label: 'Instagram', Mark: InstagramMark },
] as const

const FOOTER_LINK = 'transition-colors duration-300 hover:text-black'
const WIDGET_TITLE = 'font-sans text-[14px] font-bold text-black'

/* Light-grey footer: about blurb with the turquoise social circles, two link
   columns, contact details, and a bottom bar crediting Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="bg-panel pt-[80px] pb-[70px] text-[14px] text-muted">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-[40px] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className={WIDGET_TITLE}>About Trekvoyage</h3>
            <p className="mt-[20px] leading-[1.8]">
              We book the whole journey — flights, stays, transfers and the days in between — so a
              trip reads as one itinerary instead of six separate reservations.
            </p>
            <ul className="mt-[20px] flex items-center gap-[12px]">
              {SOCIALS.map(({ label, Mark }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="social-shadow inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand text-white transition-colors duration-300 hover:bg-brand-hover"
                  >
                    <Mark className="h-[14px] w-[14px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={WIDGET_TITLE}>Pages</h3>
            <ul className="mt-[20px] space-y-[10px]">
              {PAGES.map((page) => (
                <li key={page}>
                  <a href="#contact" className={FOOTER_LINK}>
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={WIDGET_TITLE}>Resources</h3>
            <ul className="mt-[20px] space-y-[10px]">
              {RESOURCES.map((resource) => (
                <li key={resource}>
                  <a href="#contact" className={FOOTER_LINK}>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className={WIDGET_TITLE}>Contact</h3>
            <ul className="mt-[20px] space-y-[10px]">
              <li>
                <a href="mailto:hello@trekvoyage.example" className={FOOTER_LINK}>
                  hello@trekvoyage.example
                </a>
              </li>
              <li>
                <a href="tel:+12222123819" className={FOOTER_LINK}>
                  +1 222 212 3819
                </a>
              </li>
              <li>43 Raymouth Rd. Baltemoer, London 3910</li>
            </ul>
          </div>
        </div>

        <div className="mt-[50px] flex flex-col items-center justify-between gap-[15px] border-t border-black/5 pt-[25px] lg:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <Heart className="inline h-[14px] w-[14px] text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors duration-300 hover:text-black"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex items-center gap-[16px]">
            <li>
              <a href="#contact" className={FOOTER_LINK}>
                Terms
              </a>
            </li>
            <li>
              <a href="#contact" className={FOOTER_LINK}>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
