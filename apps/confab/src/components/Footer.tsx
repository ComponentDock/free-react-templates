import { FOOTER } from '../data'
import { Newsletter } from './Newsletter'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './BrandIcons'

const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
  { name: 'Twitter', href: 'https://www.twitter.com', Icon: TwitterIcon },
  { name: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
  { name: 'YouTube', href: 'https://www.youtube.com', Icon: YoutubeIcon },
] as const

/* Dark footer: blurb, newsletter form, contact details, and a bottom bar
   crediting Component Dock. */
export function Footer() {
  return (
    <footer id="contact" aria-label="Footer" className="bg-coal pt-20 pb-[37px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-6 font-display text-2xl font-semibold text-white">
              Confab<span className="text-brand">.</span>
            </p>
            <p className="max-w-sm leading-[1.8] text-mist">{FOOTER.blurb}</p>
            <div className="mt-6 flex gap-5">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-mist transition-colors hover:text-brand"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-6 font-display text-xl font-medium uppercase text-white">
              {FOOTER.newsletterHeading}
            </h3>
            <Newsletter />
            <p className="mt-6 text-sm text-mist">
              Questions? Write to{' '}
              <a href={`mailto:${FOOTER.contactEmail}`} className="text-brand hover:underline">
                {FOOTER.contactEmail}
              </a>{' '}
              or call {FOOTER.contactPhone}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 font-display text-xl font-medium uppercase text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-mist">
              <li>
                <a href="#speakers" className="transition-colors hover:text-brand">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#schedule" className="transition-colors hover:text-brand">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#blog" className="transition-colors hover:text-brand">
                  Blog
                </a>
              </li>
              <li>
                <a href="#map" className="transition-colors hover:text-brand">
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6">
          <p className="text-center text-sm font-light text-mist">
            © 2026 Confab. {FOOTER.credit}{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
