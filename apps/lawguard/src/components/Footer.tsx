import { Phone, Mail } from 'lucide-react'

const quickLinks = ['About us', 'Services', 'Vision', 'Mission', 'Terms', 'Privacy']
const partnerLinks = ['Partners', 'Business', 'Careers', 'Blog', 'FAQ', 'Creative']
const navLinks = ['Our Vision', 'About us', 'Contact us']

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h3>
            <p className="mb-4 text-sm text-white/60">43 Raymouth Rd. Baltemoer, London 3910</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand"
                >
                  <Phone size={14} /> +1(123)-456-7890
                </a>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand"
                >
                  <Phone size={14} /> +1(123)-456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mydomain.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand"
                >
                  <Mail size={14} /> info@mydomain.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Sources</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#sources" className="text-sm text-white/60 hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {partnerLinks.map((link) => (
                  <li key={link}>
                    <a href="#sources" className="text-sm text-white/60 hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#links" className="text-sm text-white/60 hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social placeholder */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Pinterest'].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#social"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 transition-colors hover:bg-brand hover:text-white"
                    aria-label={platform}
                  >
                    {platform[0]}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Copyright + Component Dock */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="mb-2 text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lawguard. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
