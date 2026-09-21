/* Inline brand SVG icons (lucide-react dropped brand icons) */

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const cakeTypes = [
  { label: 'Blackforest', href: '#products' },
  { label: 'Red Velvet', href: '#products' },
  { label: 'Cheesecake', href: '#products' },
  { label: 'Carrot Cake', href: '#products' },
]

export function Footer() {
  return (
    <footer className="bg-[#FFF7F3]">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-6 block font-quicksand text-2xl font-bold text-gray-900">
              Crumbs
            </a>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Handcrafted cakes for every occasion. Made with the finest ingredients and a whole lot
              of love.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-orange-600 transition-transform hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-orange-600 transition-transform hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-orange-600 transition-transform hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-quicksand text-lg font-light text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 underline-offset-2 hover:text-orange-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Types */}
          <div>
            <h4 className="mb-6 font-quicksand text-lg font-light text-gray-900">Cakes</h4>
            <ul className="space-y-3">
              {cakeTypes.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-sm text-gray-500 underline-offset-2 hover:text-orange-600 hover:underline"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-quicksand text-lg font-light text-gray-900">Contact Us</h4>
            <p className="mb-4 text-sm text-gray-500">76/A, Green Lane, Dhanmondi, NYC</p>
            <a href="tel:+10787389083" className="text-lg font-normal text-orange-600">
              +10 (78) 738-9083
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-orange-100">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Crumbs. Made with{' '}
            <span className="text-orange-600">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
