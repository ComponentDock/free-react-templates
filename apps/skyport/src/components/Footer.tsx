import { useState, type FormEvent, type SVGProps } from 'react'
import { cn } from '@free-react-templates/ui'

type IconProps = SVGProps<SVGSVGElement>

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.23 1 .5 1.4.95.45.44.72.85.95 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.4-.44.45-.85.72-1.4.95-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.23-1-.5-1.4-.95-.45-.44-.72-.85-.95-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.4.44-.45.85-.72 1.4-.95.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1 .04-1.5.2-1.9.35-.4.16-.7.35-1 .65-.3.3-.5.6-.65 1-.15.4-.3.9-.35 1.9C3.2 9.3 3.2 9.7 3.2 12s0 2.7.07 4c.04 1 .2 1.5.35 1.9.16.4.35.7.65 1 .3.3.6.5 1 .65.4.15.9.3 1.9.35 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1-.04 1.5-.2 1.9-.35.4-.16.7-.35 1-.65.3-.3.5-.6.65-1 .15-.4.3-.9.35-1.9.07-1.3.07-1.7.07-4s0-2.7-.07-4c-.04-1-.2-1.5-.35-1.9a2.7 2.7 0 0 0-.65-1c-.3-.3-.6-.5-1-.65-.4-.15-.9-.3-1.9-.35C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-.6a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'X', href: 'https://x.com/', Icon: XIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
]

const PRODUCT_LINKS = ['Cloud Servers', 'Object Storage', 'Managed Databases', 'Domain Names']

const GRAM_COUNT = 8

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The dark footer band: a Top Products link column, a newsletter column with the
 * white 20 px-radius pill field and an azure Subscribe button, and an
 * Instagram-style strip of eight thumbnails (four per row). The newsletter
 * validates locally and confirms through a polite live region; the bottom line
 * links Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setError('Enter a valid e-mail address to subscribe.')
      setMessage('')
      return
    }
    setError('')
    setMessage(`Thanks — we will keep ${value} posted.`)
  }

  return (
    <footer className="bg-dark pt-[100px] text-white">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="grid gap-10 lg:grid-cols-3">
          <nav aria-label="Top Products" className="mb-[30px]">
            <h6 className="font-heading text-[14px] font-semibold text-white">Top Products</h6>
            <ul className="mt-4">
              {PRODUCT_LINKS.map((link) => (
                <li key={link} className="mt-[8px]">
                  <a href="#service" className="text-white transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-[30px]">
            <h6 className="font-heading text-[14px] font-semibold text-white">Newsletter</h6>
            <p className="mt-4 text-[14px] font-light">
              One short e-mail a month — new regions, product news and nothing else.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                E-mail address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your e-mail address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error !== ''}
                aria-describedby="newsletter-status"
                className="w-full rounded-[20px] border-none bg-surface px-5 py-[12px] leading-[38px] font-light text-copy outline-none placeholder:text-copy focus-visible:ring-2 focus-visible:ring-brand"
              />
              <button
                type="submit"
                className="mt-[20px] rounded-[25px] bg-brand px-[30px] py-[12px] text-[12px] font-medium text-white uppercase transition-colors hover:bg-brand-deep focus-visible:ring-2 focus-visible:ring-white"
              >
                Subscribe
              </button>
            </form>

            <p
              id="newsletter-status"
              role="status"
              aria-live="polite"
              className="mt-3 min-h-6 text-[12px] text-brand"
            >
              {error || message}
            </p>
          </div>

          <div className="mb-[30px]">
            <h6 className="font-heading text-[14px] font-semibold text-white">Instagram Feed</h6>
            <ul className="-m-[5px] mt-4 flex flex-wrap">
              {Array.from({ length: GRAM_COUNT }, (_, index) => index + 1).map((index) => (
                <li key={index} className="w-1/4 overflow-hidden">
                  <a href="#service" aria-label={`Skyport Instagram photo ${index}`}>
                    <img
                      src={`https://picsum.photos/seed/skyport-gram-${index}/300/300`}
                      alt=""
                      loading="lazy"
                      className="m-[5px] aspect-square w-[calc(100%-10px)] object-cover"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-[80px]">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-4 px-5 pb-5 lg:flex-row lg:justify-between">
          <p className="text-[14px] font-light">
            Copyright © 2026 Skyport. All rights reserved. More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>

          <ul className="flex items-center">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={cn(
                    'm-[5px] inline-flex w-[45px] items-center justify-center bg-darkest p-[12px] text-center text-social',
                    'transition-colors hover:bg-brand hover:text-white focus-visible:ring-2 focus-visible:ring-white',
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
