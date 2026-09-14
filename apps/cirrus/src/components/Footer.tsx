import { Phone, Mail, MapPin } from 'lucide-react'

const usefulLinks = ['Company', 'Pricing', 'Leadership', 'Blog', 'Contact']
const navLinks = ['Join Us', 'Blog', 'Privacy & Policy', 'Terms & Condition']

export function Footer() {
  return (
    <footer className="bg-footer py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">Cirrus</h2>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Useful Links</h3>
            <ul className="flex flex-col gap-2">
              {usefulLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigational */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Navigational</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Office</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="shrink-0" />
                <span>+2 392 3929 210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="shrink-0" />
                <span>info@yourdomain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/70">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with &hearts; by{' '}
            <a href="https://www.componentdock.com/" className="underline hover:text-white">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
