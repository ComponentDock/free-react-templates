import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { brand, footer } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
] as const

/** Dark footer with four widgets (brand, recent blog, site links,
 *  contact) and a copyright bar crediting Component Dock. */
export function Footer() {
  const phoneHref = 'tel:' + footer.contact.phone.replace(/[^\d+]/g, '')

  return (
    <footer id="contact" className="bg-footer-bg px-6 pt-32 pb-10 text-footer-soft">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-heading text-2xl font-black text-white uppercase">{brand.name}</h2>
          <p className="mt-5 leading-relaxed">{footer.blurb}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="block text-footer-soft transition-colors hover:text-brand"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold tracking-wide text-white uppercase after:mt-2 after:block after:h-px after:w-[70px] after:bg-white">
            Recent Blog
          </h2>
          <ul className="mt-6 space-y-5">
            {footer.recent.map((entry) => (
              <li key={entry.title + entry.thumb} className="flex gap-4">
                <img
                  src={entry.thumb}
                  alt=""
                  loading="lazy"
                  className="h-20 w-20 shrink-0 object-cover"
                />
                <div>
                  <a
                    href="#blog"
                    className="block text-lg leading-snug transition-colors hover:text-brand"
                  >
                    {entry.title}
                  </a>
                  <p className="mt-1 text-xs">{entry.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold tracking-wide text-white uppercase after:mt-2 after:block after:h-px after:w-[70px] after:bg-white">
            Site Links
          </h2>
          <ul className="mt-6 space-y-3">
            {footer.siteLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold tracking-wide text-white uppercase after:mt-2 after:block after:h-px after:w-[70px] after:bg-white">
            Have a Questions?
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
              <span>{footer.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
              <a href={phoneHref} className="transition-colors hover:text-brand">
                {footer.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
              <a
                href={`mailto:${footer.contact.email}`}
                className="transition-colors hover:text-brand"
              >
                {footer.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <Heart className="inline h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-bold text-brand transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
