import { Send } from 'lucide-react'

const footerLinks = [
  { label: 'View Project', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Testimonial', href: '#' },
  { label: 'Properties', href: '#' },
  { label: 'Support', href: '#' },
]

const stats = [
  { value: '5000+', label: 'Talented Hunters' },
  { value: '451', label: 'Companies' },
  { value: '568', label: 'Jobs Posted' },
]

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-6 text-lg font-normal uppercase text-white">About Us</h4>
            <p className="text-sm leading-relaxed text-footer-text">
              Heaven fruitful doesn&apos;t cover lesser days. Appear creeping seasons so behold. We
              connect talent with opportunity across the globe.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-normal uppercase text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-footer-text">
              <li>Address: 123 Job Street, Work City</li>
              <li>
                <a href="tel:+888044338899" className="transition-colors hover:text-brand">
                  Phone: +8880 44338899
                </a>
              </li>
              <li>
                <a href="mailto:info@jobscout.com" className="transition-colors hover:text-brand">
                  Email: info@jobscout.com
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="mb-6 text-lg font-normal uppercase text-white">Important Links</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-footer-text transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-normal uppercase text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-footer-text">
              Heaven fruitful doesn&apos;t over lesser in days. Appear creeping.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded border border-white/20 bg-transparent px-4 py-3 pr-12 text-sm text-white placeholder-footer-text outline-none focus:border-brand"
                aria-label="Email Address for newsletter"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bg-brand p-3 text-white transition-colors hover:bg-brand-dark"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-3xl font-semibold text-white">{stat.value}</span>
              <p className="mt-1 text-sm text-footer-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved | Built with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 transition-colors hover:text-brand"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 transition-colors hover:text-brand"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="text-gray-500 transition-colors hover:text-brand"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.93.25H0v-15.4h6.938zm-.36 5.95c.63 0 1.14-.15 1.53-.46.39-.31.58-.77.58-1.39 0-.35-.07-.64-.2-.87-.14-.23-.32-.41-.55-.54-.23-.13-.48-.22-.75-.27-.27-.05-.54-.08-.81-.08H3.6v3.61h2.978zm.19 6.27c.31 0 .61-.03.91-.09.3-.06.56-.16.8-.3.23-.14.42-.33.57-.58.14-.25.22-.57.22-.97 0-.76-.22-1.31-.66-1.63-.44-.32-1.02-.48-1.73-.48H3.6v3.55h3.228zM15.907 4.583h6.492v1.494H15.907V4.583zM21.58 12.39c-.18-.54-.45-.95-.82-1.25-.36-.3-.8-.45-1.32-.45-.38 0-.71.08-.99.23-.28.15-.5.35-.68.59-.18.24-.31.5-.4.79-.09.29-.14.57-.14.83h5.01c-.05-.74-.27-1.24-.66-1.74zm-3.39 4.11c.3.35.73.52 1.3.52.41 0 .76-.1 1.04-.3.28-.2.47-.4.56-.59h2.17c-.34 1.01-1.13 1.67-2.22 1.67-.61 0-1.13-.2-1.56-.59-.43-.39-.67-.94-.67-1.59 0-.66.24-1.2.71-1.59.47-.39 1.05-.59 1.73-.59.67 0 1.22.2 1.66.59.44.39.69.92.74 1.59h-2.17c-.03-.32-.13-.59-.29-.71z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
