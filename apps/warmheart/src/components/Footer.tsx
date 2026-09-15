import { Mail } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-text-primary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Agency</h3>
            <p className="text-sm leading-relaxed text-white/60">
              The world has become so fast paced that people don't want to stand by reading a page
              of information, they would much rather look at a presentation and understand the
              message.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Navigation Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-white/60">
              For business professionals caught between high OEM price and mediocre print and
              graphic output.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none border border-white/20"
              />
              <button
                className="bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-dark"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Warmheart. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/40">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
