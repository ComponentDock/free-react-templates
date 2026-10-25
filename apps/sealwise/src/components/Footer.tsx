import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { footer, site } from '../content'
import { validateNewsletter } from '../lib/forms'
import { Logo } from './Logo'
import { containerClass } from './ui'

/** Brand marks are drawn inline: the icon set no longer ships logo glyphs. */
const SOCIAL_ICONS = {
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.5L6.2 22H3l7.3-8.3L2 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z" />
    </svg>
  ),
} as const

type NewsletterState = 'idle' | 'error' | 'sent'

/** Four zones, working links, and the Component Dock line in the bottom bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<NewsletterState>('idle')
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const error = validateNewsletter(email)
    if (error) {
      setState('error')
      setMessage(error)
      return
    }
    setState('sent')
    setMessage(footer.newsletter.success)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 pt-16 lg:pt-24">
      <div className={cn(containerClass, 'grid gap-12 lg:grid-cols-12 lg:gap-8')}>
        <div className="lg:col-span-4">
          <Logo variant="light" className="h-10" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">{footer.blurb}</p>
          <ul className="mt-6 flex gap-3">
            {footer.social.map((item) => {
              const Icon = SOCIAL_ICONS[item.label as keyof typeof SOCIAL_ICONS]
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={item.label}
                    className="grid place-items-center rounded-lg bg-gray-800 p-2.5 text-gray-300 transition-colors hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className="mt-6 space-y-2 text-sm leading-5 text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {site.address}
            </li>
            <li className="flex items-start gap-2">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={site.phoneHref} data-phone="" className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-5 text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
            {footer.newsletter.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">{footer.newsletter.copy}</p>
          <form className="mt-4 flex gap-2" onSubmit={onSubmit} noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              {footer.newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={footer.newsletter.placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={state === 'error' ? true : undefined}
              aria-describedby={state === 'idle' ? undefined : 'newsletter-status'}
              className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              {footer.newsletter.submit}
            </button>
          </form>
          {state === 'idle' ? null : (
            <p id="newsletter-status" role={state === 'error' ? 'alert' : 'status'} className="mt-2 text-xs leading-5 text-gray-300">
              {message}
            </p>
          )}
        </div>
      </div>

      <div className={cn(containerClass, 'mt-16 border-t border-gray-800 py-8')}>
        <div className="flex flex-col gap-3 text-sm leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <a
            href={site.componentDock}
            rel="noreferrer"
            target="_blank"
            className="font-medium text-gray-300 hover:text-white"
          >
            {footer.dock}
          </a>
        </div>
      </div>
    </footer>
  )
}
