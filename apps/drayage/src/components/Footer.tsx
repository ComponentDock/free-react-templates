import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-footernavy px-4 pb-8 pt-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-bold uppercase tracking-[3px]">
            <span className="font-bold">Dray</span>
            <span className="font-light">age</span>
          </span>
          <p className="mt-4 font-body text-sm leading-6 text-white/70">
            A full-service freight broker moving air, ocean, rail, and road freight with transparent
            pricing and real accountability.
          </p>
        </div>
        <nav aria-label="Quick links">
          <h2 className="font-display text-base font-bold uppercase tracking-[2px]">Quick links</h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_QUICK_LINKS.map((item) => (
              <li key={item}>
                <a href="#top" className="font-body text-sm text-white/70 hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <h2 className="font-display text-base font-bold uppercase tracking-[2px]">Services</h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICE_LINKS.map((item) => (
              <li key={item}>
                <a href="#services" className="font-body text-sm text-white/70 hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-[2px]">Contacts</h2>
          <ul className="mt-4 space-y-2 font-body text-sm text-white/70">
            <li>450 Strand, Charing Cross, US</li>
            <li>
              <a href="tel:+442079308205" className="hover:text-brand">
                +44 20 7930 8205
              </a>
            </li>
            <li>
              <a href="mailto:info@drayage.example" className="hover:text-brand">
                info@drayage.example
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
        <p>
          © {new Date().getFullYear()} Drayage. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            Component Dock
          </a>
        </p>
        <div className="flex gap-6">
          <a href="#contacts" className="hover:text-brand">
            Client Login
          </a>
          <a href="#contacts" className="hover:text-brand">
            Join Team
          </a>
        </div>
      </div>
    </footer>
  )
}
