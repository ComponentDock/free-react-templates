import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { contactLinks, copyright, footerServices, quickLinks } from '../data'
import { footerSocialLinks } from './BrandIcons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <footer id="contact" aria-label="Footer" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-[100px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div>
            <h3 className="mb-4 text-xl font-normal text-navy-deep">Subscribe Newsletter</h3>
            <p className="text-sm leading-relaxed text-body">
              Product updates, engineering notes, and template launches. No spam, unsubscribe
              anytime.
            </p>
            {status === 'success' ? (
              <p
                role="status"
                className="mt-6 border border-brand/30 bg-card p-4 text-sm text-brand"
              >
                Thanks for subscribing — check your inbox to confirm.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm items-stretch" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  aria-invalid={status === 'error'}
                  className="w-full border border-hairline px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-body/70 focus:border-brand"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center gap-2 bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                >
                  <Send aria-hidden="true" className="size-4" />
                  Subscribe
                </button>
              </form>
            )}
            {status === 'error' && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <nav aria-label="Quick links">
            <h3 className="mb-4 text-xl font-normal text-navy-deep">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-sm text-body transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="mb-4 text-xl font-normal text-navy-deep">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h3 className="mb-4 text-xl font-normal text-navy-deep">Contact Us</h3>
            <ul className="space-y-3">
              {contactLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#contact"
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <ul className="flex items-center gap-4 text-body" aria-label="Social media">
            {footerSocialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center border border-hairline transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-body md:text-right">
            {copyright} · Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:text-navy"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
