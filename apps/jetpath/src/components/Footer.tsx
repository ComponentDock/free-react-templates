import { Plane } from 'lucide-react'

const FOOTER_LINKS = {
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Destinations: ['Asia', 'Europe', 'Americas', 'Africa'],
  Support: ['Help Center', 'Safety', 'Cancellation', 'Contact Us'],
}

export function Footer() {
  return (
    <footer className="bg-jet-navy-light text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Plane className="w-6 h-6 text-jet-teal-light" />
              jetpath
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted travel partner for discovering the world's most amazing destinations and
              experiences.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-jet-teal hover:text-white transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-jet-teal-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Jetpath. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-jet-teal-light hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
