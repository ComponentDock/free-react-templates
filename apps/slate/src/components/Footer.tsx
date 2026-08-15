import { navLinks } from '../data'

const footerColumns = [
  {
    title: 'Explore',
    links: navLinks,
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Features', href: '#features' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-bold">Slate</p>
            <p className="mt-4 max-w-sm text-sm font-light text-white/80">
              Modern business websites without the puzzling frameworks. Slate gives your team a
              clean, fast foundation that ships in days.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm font-light text-white/70 sm:flex-row">
          <p>© {year} Slate. All rights reserved.</p>
          <a
            href="https://www.componentdock.com/"
            className="text-white/90 transition-colors hover:text-white"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
