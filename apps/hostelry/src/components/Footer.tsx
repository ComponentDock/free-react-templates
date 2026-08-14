import { useState, type FormEvent } from 'react'
import { Hotel } from 'lucide-react'
import { FOOTER_ABOUT, INSTAFEED_IMAGES, NAVIGATION_LINKS, SOCIAL_LINKS } from '../data'
import { fieldErrors, initialNewsletter, newsletterSchema } from '../lib/forms'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './BrandIcons'

/* Footer (source: footer.footer-area.section_gap — near-black #04091e bar
   with four widgets: About Agency + social icons, Navigation Links,
   Newsletter (email input + yellow submit) and InstaFeed image grid, plus a
   copyright bar with the repo-standard Component Dock credit). */
const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Dribbble: DribbbleIcon,
  Behance: BehanceIcon,
} as const

export function Footer() {
  const [email, setEmail] = useState(initialNewsletter.email)
  const [error, setError] = useState<string | undefined>(undefined)
  const [confirmed, setConfirmed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(fieldErrors(result).email)
      setConfirmed(false)
      return
    }
    setEmail('')
    setError(undefined)
    setConfirmed(true)
  }

  return (
    <footer className="bg-night py-[120px] text-[#82848f]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="flex items-center gap-2 text-[20px] font-semibold text-white">
            <Hotel className="h-6 w-6 text-brand" aria-hidden="true" />
            Hostelry
          </h3>
          <p className="mt-5 text-[14px] leading-[24px]">{FOOTER_ABOUT}</p>
          <ul className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.label as keyof typeof SOCIAL_ICONS]
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="block h-8 w-8 text-[18px] text-[#82848f] transition-colors hover:text-brand"
                  >
                    <Icon className="h-8 w-8" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-[20px] font-semibold text-white">Navigation Links</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px]">
            {NAVIGATION_LINKS.map((label) => (
              <li key={label}>
                <a href="#home" className="transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[20px] font-semibold text-white">Newsletter</h3>
          <p className="mt-5 text-[14px] leading-[24px]">
            For business professionals caught between high OEM price and mediocre print and graphic
            output.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex">
              <input
                id="newsletter-email"
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) {
                    setError(undefined)
                  }
                }}
                aria-invalid={error ? true : undefined}
                className="w-full border border-white/20 bg-transparent px-4 py-3 text-[13px] uppercase text-white outline-none placeholder:text-[#82848f] focus:border-brand"
              />
              <button
                type="submit"
                className="shrink-0 bg-brand px-5 text-[13px] font-medium uppercase text-ink transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="mt-2 text-[12px] text-red-400">{error}</p>}
            {confirmed && (
              <p role="status" className="mt-2 text-[12px] text-brand">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold text-white">InstaFeed</h3>
          <ul className="mt-5 grid grid-cols-3 gap-2">
            {INSTAFEED_IMAGES.map((image) => (
              <li key={image}>
                <a href="#home" className="block overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-8 text-[14px] md:flex-row">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved.{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white transition-colors hover:text-brand"
          >
            More templates at Component Dock
          </a>
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-[18px] text-[#82848f] transition-colors hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
