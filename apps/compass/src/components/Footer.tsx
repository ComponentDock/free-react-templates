import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { footer } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Facebook', name: 'facebook', href: '#' },
  { label: 'Twitter', name: 'twitter', href: '#' },
  { label: 'Instagram', name: 'instagram', href: '#' },
  { label: 'LinkedIn', name: 'linkedin', href: '#' },
] as const

/* Footer: dark band with About Us / Quick Links / Subscribe Newsletter /
 * Follow Us columns plus a copyright bar crediting Component Dock
 * (source .site-footer). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(footer.newsletterError)
      setSubscribed(false)
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer data-testid="footer" className="bg-footer text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold">{footer.aboutTitle}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{footer.aboutText}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">{footer.quickLinksTitle}</h2>
            <ul className="mt-4 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">{footer.newsletterTitle}</h2>
            {subscribed ? (
              <p role="status" className="mt-4 text-white/80">
                {footer.newsletterSuccess}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-4 flex gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder={footer.newsletterPlaceholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-[43px] w-full rounded-full border border-white/20 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50 focus:border-brand"
                />
                <Button
                  type="submit"
                  className="h-[43px] shrink-0 rounded-full bg-brand px-6 text-sm text-white transition-colors hover:bg-brand/90"
                >
                  {footer.newsletterButton}
                </Button>
              </form>
            )}
            {error && (
              <p role="status" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-lg font-bold">{footer.followUsTitle}</h2>
            <ul className="mt-4 flex gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-white/60 sm:flex-row">
          <p>{footer.copyright}</p>
          <p>
            {footer.creditPrefix}{' '}
            <a
              href={footer.creditHref}
              className="font-medium text-white transition-colors hover:text-brand"
            >
              {footer.creditLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
