import { Mail, MapPin, Phone, Truck } from 'lucide-react'

const socials = [
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'X',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
] as const

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Local Moving', href: '#services' },
      { label: 'Long Distance', href: '#services' },
      { label: 'Commercial Moving', href: '#services' },
      { label: 'Packing Services', href: '#quote' },
      { label: 'Storage Solutions', href: '#quote' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Blog', href: '#home' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact', href: '#quote' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '#home' },
      { label: 'Terms of Service', href: '#home' },
      { label: 'Style Guide', href: '#home' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 dark:bg-gray-950 lg:pt-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Movere home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">Movere</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Licensed, insured moving &amp; relocation company serving the Midwest and nationwide.
              Flat-rate pricing, professional crews, zero hidden fees.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" aria-hidden="true" />
                4820 Move Lane, Chicago, IL 60601
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" aria-hidden="true" />
                (555) 890-1234
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" aria-hidden="true" />
                hello@moveremoving.com
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={`Movere on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Movere. All rights reserved.</p>
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
