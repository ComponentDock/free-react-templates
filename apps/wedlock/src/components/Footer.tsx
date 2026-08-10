import { Mail, MapPin, Phone } from 'lucide-react'

const links = ['Home', 'Services', 'About Us', 'Portfolio', 'Contacts'] as const

export function Footer() {
  return (
    <footer className="bg-night-900 py-16 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3" aria-label="Wedlock home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-500 font-serif text-lg font-bold text-white">
                W
              </span>
              <span className="font-serif text-xl font-bold text-white">Wedlock</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              An elegant wedding and event planning studio — turning your love story into the
              celebration it deserves.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                Germany — 785 15h Street, Office 478 Berlin, De 81566
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <a
                  href="mailto:hello@wedlock.example"
                  className="transition-colors hover:text-white"
                >
                  hello@wedlock.example
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <a href="tel:+18408412569" className="transition-colors hover:text-white">
                  +1 840 841 25 69
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Site links">
            <h3 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
              Links
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-stone-400 transition-colors hover:text-accent-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-stone-400">Subscribe for updates and planning tips.</p>
            <form className="mt-4 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:border-accent-500 focus:outline-none"
              />
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Wedlock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
