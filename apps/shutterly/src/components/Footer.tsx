import { useState } from 'react'
import { ArrowUp, Send } from 'lucide-react'
import { componentDockUrl, footerContact, footerNavigation } from '../data'
import { socialLinks } from './BrandIcons'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-footer-bg pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand + pera + social */}
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.2em]">Shutterly</p>
            <p className="mt-5 max-w-xs leading-relaxed text-white/70">
              Every image tells a story — capture yours with us, one shutter click at a time.
            </p>
            <ul className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`${label} profile`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="mb-[30px] font-display text-xl">Navigation</h4>
            <ul className="space-y-3">
              {footerNavigation.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="mb-[30px] font-display text-xl">Contact</h4>
            <ul className="space-y-3 text-white/70">
              {footerContact.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {/* Subscribe newsletter */}
          <div>
            <h4 className="mb-[30px] font-display text-xl">Subscribe Newsletter</h4>
            {subscribed ? (
              <p
                role="status"
                aria-label="Newsletter subscription"
                className="leading-relaxed text-white"
              >
                You&apos;re subscribed to the Shutterly newsletter — welcome to the club, and check
                your inbox for the first story.
              </p>
            ) : (
              <>
                <p className="mb-5 leading-relaxed text-white/70">
                  Monthly stories, shoots, and offers. No noise, ever.
                </p>
                <form onSubmit={handleSubmit} className="flex">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border border-white/25 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-white"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-ink px-6 py-3 font-display text-sm uppercase tracking-[1px] text-white transition-colors hover:bg-hover-fill"
                  >
                    <Send aria-hidden="true" className="size-4" />
                    SUBSCRIBE
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 md:flex-row">
          <p className="text-sm text-white/60">
            &copy; 2026 Shutterly &mdash; Photographer &middot; All rights reserved
          </p>
          <a
            href={componentDockUrl}
            className="text-sm text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Made with Component Dock
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex size-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-ink"
      >
        <ArrowUp aria-hidden="true" className="size-5" />
      </button>
    </footer>
  )
}
