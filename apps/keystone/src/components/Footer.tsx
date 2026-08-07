import { BrandIcon, type BrandName } from './BrandIcon'

const columns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    heading: 'New Products',
    links: [
      { label: '3D Visuals', href: '#work' },
      { label: 'Interior Kits', href: '#services' },
      { label: 'Urban Plans', href: '#services' },
      { label: 'Concept Docs', href: '#blog' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#contact' },
      { label: 'Privacy Policy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
  },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'youtube', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold uppercase tracking-wide">
              Keystone<span className="text-brand">.</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              An architecture studio creating lasting impressions through design — from single
              houses to whole districts.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={`https://${social.name}.com`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© 2026 Keystone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
