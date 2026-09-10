import { Phone, MapPin } from 'lucide-react'

const quickLinks = [
  'Support Forums',
  'Communication',
  'FAQS',
  'Privacy Policy',
  'Rules & Condition',
  'Contact Us',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      {/* Footer main */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-brand">About Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                <a href="tel:+880123456789" className="hover:text-brand">
                  +880****4378
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                <a href="mailto:info@packwell.com" className="hover:text-brand">
                  info@packwell.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Gazipur, 1704, Bangladesh. 1215.
              </li>
            </ul>
          </div>

          {/* Latest Tweets */}
          <div>
            <h3 className="text-lg font-bold text-brand">Latest Tweets</h3>
            <ul className="mt-4 space-y-4">
              {[
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
              ].map((tweet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-white/60">{tweet}</p>
                    <a href="#" className="mt-1 inline-block text-xs text-brand hover:underline">
                      5 Minutes Ago
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-brand">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 bg-footer-dark py-5 text-center text-sm text-white/50">
        Copyright &copy; {new Date().getFullYear()} All rights reserved | PackWell — More templates
        at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-brand"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
