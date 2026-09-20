import { Mail } from 'lucide-react'

const quickLinks = ['Home', 'Courses', 'About', 'Events', 'News', 'Contact']
const courseLinks = ['Web Development', 'Data Science', 'Mobile Dev', 'Digital Marketing']

export function Footer() {
  return (
    <footer className="bg-dark-bar text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading text-2xl font-bold text-white">
              Cognita
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Empowering learners worldwide with access to the best online courses and educators.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white">
                f
              </a>
              <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white">
                𝕏
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

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading text-base font-semibold">Courses</h3>
            <ul className="mt-3 space-y-2">
              {courseLinks.map((c) => (
                <li key={c}>
                  <a href="#courses" className="text-sm text-gray-400 hover:text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-heading text-base font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>123 Learning Street</li>
              <li>Education City, EC 12345</li>
              <li>info@cognita.com</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-heading text-base font-semibold">Newsletter</h3>
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cognita. All rights reserved.
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
