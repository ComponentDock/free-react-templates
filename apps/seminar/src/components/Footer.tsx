import { Globe, Mail, Share2 } from 'lucide-react'

const QUICK_LINKS = ['Home', 'About', 'Speakers', 'Schedule', 'News', 'Buy Tickets']

export function Footer() {
  return (
    <footer className="bg-surface py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <div>
          <a href="#" className="mb-4 inline-block text-xl font-bold text-white">
            Seminar<span className="text-primary-400">.</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-text">
            The premier web design conference bringing together designers, developers, and product
            leaders to share knowledge and build community.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-text transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Connect</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Globe"
              className="text-text transition-colors hover:text-primary-400"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              aria-label="Mail"
              className="text-text transition-colors hover:text-primary-400"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              aria-label="Share"
              className="text-text transition-colors hover:text-primary-400"
            >
              <Share2 size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border px-6 pt-8 text-center text-xs text-text">
        &copy; {new Date().getFullYear()} Seminar. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
        .
      </div>
    </footer>
  )
}
