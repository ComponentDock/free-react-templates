import { Camera } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, XIcon } from './social-icons'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Style Guide']

export function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-2" aria-label="Shutter home">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                <Camera className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight text-white">
                Shutter
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Fine art and documentary photographer capturing authentic moments and timeless
              stories.
            </p>
            <ul className="mt-6 flex items-center justify-center gap-3 md:justify-start">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-accent-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm md:items-end">
            <h4 className="text-sm font-medium uppercase tracking-widest text-white">Explore</h4>
            <div className="flex flex-col items-center gap-3 md:items-end">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#home"
                  className="text-gray-400 transition-colors hover:text-accent-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2026 Shutter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
