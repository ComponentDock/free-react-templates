import { Phone, Mail, MapPin } from 'lucide-react'

const exploreLinks = ['Home', 'About', 'Practice Areas', 'Cases', 'Contact']
const legalLinks = ['Business Law', 'Family Law', 'Criminal Law', 'Real Estate', 'Personal Injury']

export function Footer() {
  return (
    <footer className="bg-dark-1 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">Statutory</h3>
          <p className="text-sm text-white/60">
            Dedicated legal professionals committed to protecting your rights and delivering
            justice.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Explore</h4>
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#practice" className="text-sm text-white/60 transition hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Have a Question?</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              123 Legal Avenue, Suite 100, New York, NY 10001
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 flex-shrink-0" />
              +00 1234 567
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 flex-shrink-0" />
              info@statutory.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Statutory. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gold transition hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
