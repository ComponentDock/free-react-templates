const footerLinks = ['About Us', 'Services', 'Testimonials', 'Contact Us']

const socialIcons = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    label: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'Instagram',
    path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z',
  },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-bold">About Us</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We are a creative agency specializing in web design, development, and digital
                  marketing solutions that help businesses grow.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Features</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {footerLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="flex gap-3">
                  {socialIcons.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="mb-4 text-lg font-bold">Subscribe Newsletter</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                aria-label="Enter Email"
                className="flex-1 rounded-l border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ForgeHub. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
