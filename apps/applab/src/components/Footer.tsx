import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Services',
    links: ['Team management', 'Collaboration', 'Todo', 'Events'],
  },
  {
    title: 'Useful Links',
    links: ['Pricing', 'Features', 'Blog', 'Contact'],
  },
  {
    title: 'Downloads',
    links: ['Download from Apple Store', 'Download from Play Store'],
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-primary-400">Applab</h3>
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            Firmament morning sixth subdue darkness creeping gathered divide — a complete app &amp;
            SaaS landing page for your next launch.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Applab. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
