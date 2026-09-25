import { Heart } from 'lucide-react'

const footerLinks = {
  About: ['About us', 'Our Services', 'The team', 'Careers'],
  Links: ['Album', 'Shows', 'Artists', 'News'],
  Social: ['Facebook', 'Twitter', 'Snapchat', 'Instagram'],
}

export function Footer() {
  return (
    <footer className="bg-cadence-dark py-16" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="mb-4 block font-display text-3xl text-white">Cadence</span>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              The best music templates for artists, bands, and music festivals. Built with love.
            </p>
            <p className="flex items-center gap-1 text-xs text-white/30">
              Made with <Heart size={12} className="text-cadence-pink" /> by
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/50 transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Subscribe
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-l-lg bg-white/10 px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-cadence-pink"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-gradient-to-r from-cadence-pink to-cadence-purple px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} All rights reserved. Template inspired by free
            designs. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/50 transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
