import { BrandIcon, type BrandName } from './BrandIcon'

const columns: { title: string; links: string[] }[] = [
  {
    title: 'Services',
    links: ['Classic Haircut', 'Skin Fade', 'Beard Trim', 'Hot Towel Shave'],
  },
  {
    title: 'Info',
    links: ['About Us', 'Our Barbers', 'Gallery', 'Blog'],
  },
  {
    title: 'Shop',
    links: ['Pricing', 'Book Now', 'Contact', 'FAQ'],
  },
  {
    title: 'Contact Us',
    links: ['(555) 741-2580', 'hello@barberkraft.com'],
  },
]

const socials: { label: string; name: BrandName }[] = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-sm font-extrabold text-gray-900">
                F
              </span>
              Fade
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Brooklyn's premier barbershop where classic craftsmanship meets modern style. Expert
              barbers, premium products, and an experience you'll look forward to every time.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-gray-400 transition-colors hover:text-accent-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-800 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Fade. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-400 transition-colors hover:text-accent-400">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-400 transition-colors hover:text-accent-400">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="text-gray-500 transition-colors hover:text-accent-400"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
