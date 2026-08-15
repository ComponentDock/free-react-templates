import { Cross } from 'lucide-react'
import { navLinks } from '../data'

const footerColumns = [
  {
    title: 'Explore',
    links: navLinks,
  },
  {
    title: 'Clinic',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Departments', href: '#departments' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 text-2xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              Mintly
            </p>
            <p className="mt-4 max-w-sm text-sm font-light text-white/80">
              Modern, gentle dental care for the whole family. Mintly makes it easy to book, relax,
              and keep your smile healthy for life.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-white/80 transition-colors hover:text-mint"
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
          <p>© {year} Mintly. All rights reserved.</p>
          <a
            href="https://www.componentdock.com/"
            className="text-white/90 transition-colors hover:text-mint"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
