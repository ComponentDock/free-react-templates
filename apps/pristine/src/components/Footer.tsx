import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'

const navigationLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const
const serviceLinks = [
  'Residential cleaning',
  'Commercial cleaning',
  'Window cleaning',
  'Building cleaning',
] as const

/** Dark-navy footer: logo + blurb, Navigation / Services / Contact Us
 *  columns and a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="bg-navy">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2" aria-label="Pristine home">
            <Sparkles className="h-6 w-6 text-accent" aria-hidden="true" />
            <span className="text-2xl font-medium uppercase tracking-wide text-white">
              Pristine
            </span>
          </a>
          <p className="mt-6 max-w-sm text-base leading-[1.8] font-light text-white/75">
            A professional cleaning company caring for homes and workplaces across the city —
            trusted by hundreds of customers for over 25 years.
          </p>
        </div>

        <nav aria-label="Navigation">
          <h3 className="text-xl font-normal text-white">Navigation</h3>
          <ul className="mt-6 space-y-3">
            {navigationLinks.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-[15px] font-light text-muted transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-xl font-normal text-white">Services</h3>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  className="text-[15px] font-light text-muted transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xl font-normal text-white">Contact Us</h3>
          <address className="mt-6 space-y-3 text-[15px] font-light not-italic text-muted">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              65/A, Green Lane, Kings Garden, CA 2367
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              hello@pristine.example
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              10 (23) 267 3562
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-[15px] font-light text-muted lg:px-8">
          Made with <span className="text-brand">♥</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-opacity hover:opacity-80"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
