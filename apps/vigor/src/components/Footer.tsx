import { MapPin, Phone, Mail } from 'lucide-react'

const services = [
  'Boost Your Body',
  'Achieve Your Goal',
  'Analyze Your Goal',
  'Improve Your Performance',
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
            <p className="mb-6 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Facebook', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-400"
                >
                  <span className="text-xs">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#programs" className="hover:text-brand-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Have a Questions?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" /> +2 392 3929 210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" /> info@vigor.com
              </li>
            </ul>
          </div>
          {/* Component Dock */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">More Templates</h3>
            <p className="mb-4 text-sm">
              Looking for more free templates? Visit Component Dock for a growing collection of
              production-ready React templates.
            </p>
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-brand-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              More templates at Component Dock
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Vigor. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-400 hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
