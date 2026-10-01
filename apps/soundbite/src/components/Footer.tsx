import {
  AppleIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  XIcon,
  YoutubeIcon,
} from './BrandIcons'

const columns = [
  { title: 'Podcast', links: ['Episodes', 'About', 'Guests', 'Clips'] },
  { title: 'Follow', links: ['Spotify', 'Apple Podcasts', 'YouTube', 'RSS Feed'] },
  { title: 'More', links: ['Newsletter', 'Sponsor', 'Merch', 'Contact'] },
]

const socials = [
  { label: 'X (Twitter)', Icon: XIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 pt-16 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <svg viewBox="0 0 24 24" fill="white" aria-hidden="true" className="h-4 w-4">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Soundbite
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              Real stories from founders, creators, and innovators building what&rsquo;s next. New
              episodes every Tuesday.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Listen Now
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe on your favorite platform and never miss an episode.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <SpotifyIcon className="h-4 w-4" />
                Spotify
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <AppleIcon className="h-4 w-4" />
                Apple
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 text-sm text-gray-500 sm:flex-row">
          <p>&copy; 2026 Soundbite. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Style Guide
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
