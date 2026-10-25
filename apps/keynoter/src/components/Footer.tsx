import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, COMPONENT_DOCK, CONTACT, FOOTER_COLUMNS } from '../content'
import { Container } from './ui'
import { SocialRail } from './Chrome'

const HEADING_CLASS = 'text-[20px] leading-[1.2] font-black text-white md:text-[24px]'
const ITEM_CLASS = 'text-[16px] leading-[1.5] text-white/50 md:text-[18px]'

/**
 * 528px navy footer: four equal columns, a 1px hot-pink rule, then a 95px
 * copyright bar. The line credits Component Dock instead of the theme vendor
 * and the contact column uses the reference's pink glyphs.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-navy pt-[50px] text-white lg:pt-[80px]">
      <Container>
        <div className="grid gap-10 pb-[40px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:pb-[90px]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className={HEADING_CLASS}>{column.heading}</h3>
              <ul className="mt-[25px] space-y-[14px] lg:mt-[50px] lg:space-y-[24px]">
                {column.items.map((item) => (
                  <li key={item} className={ITEM_CLASS}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className={HEADING_CLASS}>{CONTACT.heading}</h3>
            <ul className="mt-[25px] space-y-[18px] lg:mt-[50px]">
              <li className="flex gap-[13px]">
                <MapPin aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-pink" />
                <span className="pl-[20px] text-[16px] leading-[1.5] text-white/50">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex gap-[13px]">
                <Phone aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-pink" />
                <span className="pl-[20px] text-[16px] leading-[1.5] text-white/50">
                  {CONTACT.phone}
                </span>
              </li>
              <li className="flex gap-[13px]">
                <Mail aria-hidden="true" className="mt-1 h-[18px] w-[18px] shrink-0 text-pink" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="pl-[20px] text-[16px] leading-[1.5] text-white/50 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-pink py-[35px] text-center text-[14px] leading-[1.5] text-white/50 md:flex-row md:justify-between md:text-left">
          <p>
            © {year} {BRAND} — built with{' '}
            <a href={COMPONENT_DOCK} className="text-white underline underline-offset-4">
              Component Dock
            </a>
            . More templates at Component Dock.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-[42px]">
            <SocialRail size={16} />
            <a
              href={COMPONENT_DOCK}
              className="text-[14px] text-white/50 transition-colors hover:text-white"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
