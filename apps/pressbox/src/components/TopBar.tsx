import { BrandIcon } from './BrandIcon'

const navLinks = ['About Us', 'Contact', 'Advertisement', 'Privacy']
const socials = [
  { name: 'facebook' as const, href: '#' },
  { name: 'twitter' as const, href: '#' },
  { name: 'instagram' as const, href: '#' },
  { name: 'youtube' as const, href: '#' },
  { name: 'rss' as const, href: '#' },
]

export function TopBar() {
  return (
    <div className="border-b border-brand-grey bg-white text-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <nav aria-label="Secondary">
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-semibold uppercase tracking-wide text-brand-dark transition-colors hover:text-brand-red"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-3">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                aria-label={s.name}
                className="text-brand-dark transition-colors hover:text-brand-red"
              >
                <BrandIcon name={s.name} className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
