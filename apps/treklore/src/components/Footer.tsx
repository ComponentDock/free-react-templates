import { Phone, MapPin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer role="contentinfo" className="relative">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/treklore-footer/1920/800)' }}
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10">
        {/* Newsletter */}
        <section aria-label="Newsletter" className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-2 font-display text-2xl font-bold uppercase tracking-wide text-white">
              Subscribe to our newsletter to get the latest trends &amp; news
            </h2>
            <p className="mb-6 text-sm text-white/60">Join our database NOW!</p>
            <form
              className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-name" className="sr-only">
                Name
              </label>
              <input
                id="newsletter-name"
                type="text"
                placeholder="Name"
                className="flex-1 rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:bg-white/20 focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                className="flex-1 rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:bg-white/20 focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button
                type="submit"
                className="rounded bg-brand-blue px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Contact columns */}
        <section aria-label="Contact information" className="py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-3">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-white">
                  Give us a call
                </h3>
                <p className="text-sm text-white/60">00-56 445 678 33</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-white">
                  Come &amp; drop by
                </h3>
                <p className="text-sm text-white/60">
                  123 Travel Street
                  <br />
                  Adventure City, AC 10001
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-white">
                  Send us a message
                </h3>
                <p className="text-sm text-white/60">hello@treklore.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} All rights reserved | Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
