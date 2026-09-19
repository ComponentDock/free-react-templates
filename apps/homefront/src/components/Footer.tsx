import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Homefront</h3>
            <p className="text-sm text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Buy / Sell links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-3 font-semibold text-white">Buy</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Home For Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Open Houses
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    New Listing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Recently Reduced
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Sell</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Sell Your Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Get A Home Valuation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Local Home Prices
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-accent">
                    Guides &amp; Rules
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Have a Question?</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+2 392 3929 210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
