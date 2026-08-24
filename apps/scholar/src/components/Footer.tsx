import { Mail } from 'lucide-react'

const subjects = ['Web Development', 'Data Science', 'Mobile Development', 'Digital Marketing']
const community = ['Forums', 'Study Groups', 'Events', 'Blog']
const company = ['About Us', 'Careers', 'Press', 'Contact']

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-white">
              Scholar
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Empowering learners worldwide with access to the best online courses and educators.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white">
                f
              </a>
              <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white">
                t
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white"
              >
                ig
              </a>
            </div>
          </div>

          {/* Column 2 — Subjects */}
          <div>
            <h3 className="font-display text-base font-semibold">Subjects</h3>
            <ul className="mt-3 space-y-2">
              {subjects.map((s) => (
                <li key={s}>
                  <a
                    href={`#subject-${s.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Community */}
          <div>
            <h3 className="font-display text-base font-semibold">Community</h3>
            <ul className="mt-3 space-y-2">
              {community.map((c) => (
                <li key={c}>
                  <a
                    href={`#community-${c.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company + Newsletter */}
          <div>
            <h3 className="font-display text-base font-semibold">Company</h3>
            <ul className="mt-3 space-y-2">
              {company.map((c) => (
                <li key={c}>
                  <a
                    href={`#company-${c.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-display text-base font-semibold">Newsletter</h3>
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Scholar. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
