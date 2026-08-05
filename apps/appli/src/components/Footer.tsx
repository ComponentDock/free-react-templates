import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'Our solutions',
    links: ['Design & creatives', 'Telecommunication', 'Restaurant', 'Programing', 'Architecture'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Blog', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Terms of service', 'Privacy policy', 'FAQ'],
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy py-16 text-gray-300 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-white">Appli</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-light">
            Appli keeps your team connected with personalized experiences — a complete app landing
            page for your next launch.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h4>
            <ul aria-label={column.title} className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-muted-light transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-4 pt-8 sm:px-6">
        <p className="text-center text-sm text-muted-light">
          Copyright © {new Date().getFullYear()} Appli. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
