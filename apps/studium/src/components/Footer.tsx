const columns = [
  {
    title: 'About',
    links: ['About Studium', 'Our Story', 'Instructors', 'Careers'],
  },
  {
    title: 'Help Desk',
    links: ['FAQ', 'Support', 'Contact Us', 'Privacy Policy'],
  },
  {
    title: 'Recent Courses',
    links: ['Web Development', 'Digital Marketing', 'Photography', 'Music Production'],
  },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-bold">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-4 text-lg font-bold">Have a Questions?</h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
            <p>&copy; 2026 Studium. All rights reserved.</p>
            <p>
              Made with{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-brand-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
