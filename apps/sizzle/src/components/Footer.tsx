import { Heart, MapPin, Phone } from 'lucide-react'
import { footer } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
] as const

/** Red footer widget band (Opening Hours / Contact Us / Newsletter) over
 *  a dark bottom bar with the copyright line, social icons and the
 *  mandatory Component Dock credit. */
export function Footer() {
  return (
    <footer id="contact" className="bg-ink">
      <div className="bg-brand px-4 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-white">Opening Hours</h2>
            <ul className="mt-6">
              {footer.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex justify-between border-b border-white/30 py-3 text-sm last:border-b-0"
                >
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{footer.address}</span>
              </li>
              {footer.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-2xl font-semibold">{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Newsletter</h2>
            <p className="mt-6 text-sm leading-relaxed">{footer.newsletter}</p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your Email Address"
                aria-label="Email address"
                className="w-full rounded-[20px] bg-section px-5 py-3 text-sm text-ink placeholder-[#999999] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-[57px] bg-ink px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/80">
            {footer.bottom}{' '}
            <Heart className="inline h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex gap-3">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="flex h-[35px] w-[35px] items-center justify-center bg-social-bg text-white transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
