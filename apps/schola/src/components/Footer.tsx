import { BrandIcon, type BrandName } from './BrandIcon'

const columns = [
  {
    title: 'Categories',
    links: [
      'Software Engineering',
      'Creative Design',
      'Digital Marketing',
      'Data & Analytics',
      'Cloud & DevOps',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Become an Instructor', 'Blog', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'FAQ', 'Accessibility', 'Sitemap'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Licenses'],
  },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string; href: string }> = [
  { name: 'x', label: 'X', href: 'https://x.com/schola' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/schola' },
  { name: 'youtube', label: 'YouTube', href: 'https://youtube.com/@schola' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com/schola' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <span className="relative block h-8 w-8">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500" />
                <span className="absolute inset-1 rounded-md bg-white dark:bg-gray-950" />
                <span className="absolute inset-1.5 rounded bg-gradient-to-br from-primary-500 to-accent-500" />
              </span>
              <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
                Schola
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Forge Your Future. Transform your career with expert-led courses trusted by 100,000+
              learners worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
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
          © {new Date().getFullYear()} Schola. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
