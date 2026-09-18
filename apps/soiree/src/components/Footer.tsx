import { Globe } from 'lucide-react'

const SOCIAL_LINKS = [
  { name: 'Pinterest', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Dribbble', href: '#' },
  { name: 'Instagram', href: '#' },
]

const INSTA_IMAGES = [1, 2, 3, 4, 5, 6]

const FOOTER_NAV = ['Home', 'Speakers', 'Events', 'News', 'Contact']

export function Footer() {
  return (
    <footer className="bg-[var(--color-heading)] text-white pt-12 pb-6 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Soiree</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Join us for the most exciting event of the year. Three days of inspiration, learning,
              and connection with industry leaders.
            </p>
            <ul className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Globe size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Grid */}
          <div>
            <h4 className="text-lg font-bold mb-4">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {INSTA_IMAGES.map((n) => (
                <a key={n} href="#" className="block overflow-hidden rounded">
                  <img
                    src={`https://picsum.photos/seed/insta-${n}/100/100`}
                    alt={`Instagram post ${n}`}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to our newsletter</h4>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-Mail here"
                className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-400 text-sm border border-white/20 focus:outline-none focus:border-[var(--color-brand)]"
              />
              <button className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white py-2 rounded text-sm font-semibold transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            Made with <span className="text-[var(--color-brand)]">♥</span> by{' '}
            <a href="https://www.componentdock.com/" className="hover:text-white transition-colors">
              Component Dock
            </a>
          </p>
          <ul className="flex gap-4">
            {FOOTER_NAV.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
