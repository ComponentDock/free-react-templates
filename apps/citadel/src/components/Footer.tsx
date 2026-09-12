const companyLinks = ['About', 'Media', 'Career', 'Testimonials', 'Stability']
const solutionLinks = [
  'Industrial Problems',
  'Construction Solution',
  'Car Manufacturing',
  'Mechanical Problems',
]
const offices = [
  { city: 'London — UK', address: '127 Manchester City, London', phone: '+008 728 362 278' },
  { city: 'New York — USA', address: '350 Fifth Avenue, New York', phone: '+008 728 362 279' },
]

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink-dark pt-20 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + social */}
          <div>
            <a href="#" className="mb-6 inline-block text-2xl font-bold text-white">
              <span className="text-brand">C</span>itadel
            </a>
            <p className="mb-6 text-sm font-light leading-relaxed text-gray-400">
              Delivering world-class industrial solutions with precision engineering, cutting-edge
              technology, and unwavering commitment to quality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-light text-gray-400 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-white">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-light text-gray-400 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch offices */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-white">Branch Office</h4>
            <ul className="space-y-5">
              {offices.map((office) => (
                <li key={office.city}>
                  <strong className="block text-sm font-medium text-white">{office.city}</strong>
                  <p className="text-sm font-light text-gray-400">{office.address}</p>
                  <p className="text-sm font-light text-gray-400">{office.phone}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-16 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-light text-gray-500">
            &copy; {new Date().getFullYear()} Citadel. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
