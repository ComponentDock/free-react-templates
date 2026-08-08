import { BrandIcon, type BrandName } from './BrandIcon'

const columns: { title: string; links: string[] }[] = [
  {
    title: 'Products',
    links: ['API Gateway', 'Authentication', 'Analytics', 'Webhooks'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'SDKs', 'API Reference', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
]

const socials: { label: string; name: BrandName }[] = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-extrabold text-white">
                E
              </span>
              Endpoint
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Developer-first API infrastructure that helps teams ship better APIs faster. Gateway,
              auth, analytics, and SDKs in one platform.
            </p>
            <p className="mt-4 text-sm">(555) 678-9012 · hello@endpoint.dev</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="transition-colors hover:text-primary-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm">© 2026 Endpoint. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary-400">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="text-gray-500 transition-colors hover:text-primary-400"
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
