import { SocialLinks } from './SocialLinks'

const columns = [
  {
    title: 'About',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    links: ['Team', 'Careers', 'Press'],
  },
  {
    title: 'Solutions',
    links: ['Studio', 'Creative', 'Design'],
  },
  {
    title: 'Why Bold',
    links: ['Marketing', 'Social Media', 'Agencies', 'Internal', 'Enterprise', 'Communications'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Customers', 'Video Showcase', 'Watch a Demo'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Jobs', 'Press'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-night py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold text-white">{column.title}</h3>
              {'blurb' in column && (
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{column.blurb}</p>
              )}
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <SocialLinks />
        </div>

        <p className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Bold. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
          <a href="#home" className="transition-colors hover:text-white">
            Terms & Conditions
          </a>
          <a href="#home" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
