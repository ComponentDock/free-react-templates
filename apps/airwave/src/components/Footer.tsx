import { Radio } from 'lucide-react'

const columns = [
  {
    heading: 'Podcast',
    links: ['Guests', 'Clips'],
  },
  {
    heading: 'Follow',
    links: ['RSS Feed'],
  },
  {
    heading: 'More',
    links: ['Sponsor', 'Merch'],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Airwave home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <Radio className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Airwave</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Real stories from founders, creators, and innovators building the future. New episodes
              every Tuesday.
            </p>
            <p className="mt-6 text-sm font-semibold text-gray-300">
              Subscribe on your favorite platform:
            </p>
            <a
              href="#episodes"
              className="mt-2 inline-block rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
            >
              Apple Podcasts
            </a>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Airwave. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Terms of Service
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-primary-400">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
