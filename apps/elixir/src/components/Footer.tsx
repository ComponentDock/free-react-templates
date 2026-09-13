import { MapPin, Phone, Mail, Pill } from 'lucide-react'

const quickLinks = ['Supplements', 'Vitamins', 'Diet & Nutrition', 'Tea & Coffee'] as const

export function Footer() {
  return (
    <footer className="bg-ink-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Pill className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-xl font-black uppercase tracking-[0.2em]">
                Elixir<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis
              distinctio voluptates sed dolorum excepturi iure eaque, aut unde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold uppercase tracking-wide text-brand">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#store" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-lg font-bold uppercase tracking-wide text-brand">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+123923929210" className="hover:text-white">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="mailto:emailaddress@domain.com" className="hover:text-white">
                  emailaddress@domain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Elixir. All rights reserved. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
