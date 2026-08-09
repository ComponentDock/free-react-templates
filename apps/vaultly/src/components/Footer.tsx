import { Bot } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'How It Works', 'Pricing', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help Center', 'API Docs', 'Community'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Disclosures', 'Security'],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Finley home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500">
                <Bot className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
                Finley
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Your personal AI financial advisor. Smart, secure, and always on — helping you build
              wealth one goal at a time.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-gray-500 dark:text-gray-500">
              Finley Advisors LLC, an SEC-registered investment advisor. Investing involves risk,
              including the possible loss of principal.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © 2026 Finley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
