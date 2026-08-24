import { Mail, MapPin, Phone } from 'lucide-react'

/**
 * Dark footer with site name, about/contact widgets, social links, and
 * Component Dock attribution link.
 */
export function Footer() {
  return (
    <footer className="bg-surface pt-16 text-white/50" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 md:grid-cols-3">
        {/* About widget */}
        <div>
          <h3 className="mb-4 font-serif text-2xl font-medium text-white">Folio</h3>
          <p className="text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Links widget */}
        <div>
          <h3 className="mb-4 font-serif text-2xl font-medium text-white">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Books', 'News', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact widget */}
        <div>
          <h3 className="mb-4 font-serif text-2xl font-medium text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>198 West 21th Street, Suite 721 New York, NY 10016</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
              <a href="mailto:folio@example.com" className="hover:text-brand">
                folio@example.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
              <a href="tel:+123456789" className="hover:text-brand">
                +1 234 567 89
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Folio. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
