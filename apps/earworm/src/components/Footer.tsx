const categories = ['Entrepreneurship', 'Media', 'Tech', 'Tutorials'] as const

const latestEpisodes = [
  { date: 'December 9, 2024', title: 'Episode 205 — See Ya In Three!' },
  { date: 'December 8, 2024', title: 'Episode 204 — See Ya In Two!' },
] as const

const socials = ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'YouTube'] as const

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-heading">About Us</h4>
            <p className="text-sm leading-relaxed text-body">
              Earworm is a free podcast and audio website template, designed to help creators
              showcase their episodes and grow their audience.
            </p>
            <p className="mt-4 text-xs text-secondary">
              &copy; {new Date().getFullYear()} Earworm. All rights reserved.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-heading">Categories</h4>
            <ul className="space-y-2 text-sm text-body">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="transition-colors hover:text-brand">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Episodes */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-heading">Latest Episodes</h4>
            <div className="space-y-4">
              {latestEpisodes.map((ep) => (
                <div key={ep.title}>
                  <p className="text-xs text-secondary">{ep.date}</p>
                  <a
                    href="#"
                    className="text-sm font-medium text-heading transition-colors hover:text-brand"
                  >
                    {ep.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-heading">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded bg-gray-bg text-sm text-body transition-colors hover:bg-brand hover:text-white"
                >
                  {s[0]}
                </a>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="App Store"
                className="rounded bg-heading px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-brand"
              >
                App Store
              </a>
              <a
                href="#"
                aria-label="Google Play"
                className="rounded bg-heading px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-brand"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-secondary">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
