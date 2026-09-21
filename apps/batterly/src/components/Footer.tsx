import { WORKING_HOURS, SOCIAL_LINKS, SOCIAL_PATHS } from '../data'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <img
        src="https://picsum.photos/seed/batterly-footer-bg/1920/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Working Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {WORKING_HOURS.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand / About */}
          <div className="text-center">
            <a href="#home" className="font-display text-2xl font-bold">
              Batterly
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Crafting sweet memories with every bite. Premium cakes, pastries, and baked goods made
              with love.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={SOCIAL_PATHS[social.label as keyof typeof SOCIAL_PATHS]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-sm text-white/70">
              Subscribe to get updates on new flavors and special offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                aria-label="Email for newsletter"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Batterly — All rights reserved
          </p>
          <div className="flex gap-4 text-sm text-white/50">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#sitemap" className="hover:text-white transition-colors">
              Site Map
            </a>
          </div>
          <p className="text-sm text-white/50">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
