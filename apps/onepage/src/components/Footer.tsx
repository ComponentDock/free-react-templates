import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'About', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'FAQ', 'Privacy', 'Terms'],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-bold tracking-wide text-primary-500 dark:text-primary-400"
            >
              OnePage
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} OnePage. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
