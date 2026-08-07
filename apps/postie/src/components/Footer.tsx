import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'Terms', 'Privacy'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Postie
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A powerful, free mail-app landing template crafted with React and Tailwind CSS.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition-colors hover:text-primary-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Postie. All rights reserved.
      </div>
    </footer>
  )
}
