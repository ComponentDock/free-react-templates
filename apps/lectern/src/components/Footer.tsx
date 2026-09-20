import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const usefulLinks = [
  ['Home', 'About Us', 'Services', 'Events', 'Features'],
  ['Policy', 'Terms', 'Help', 'FAQs', 'Site Map'],
] as const

const recentPosts = [
  {
    title: "Snackable study: How to break up your master's degree",
    date: '24 Mar 2018',
  },
  {
    title: 'Open University plans major cuts to number of staff',
    date: '24 Mar 2018',
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* About widget */}
        <div>
          <a href="#home" className="text-2xl font-bold tracking-wide text-brand">
            Lectern
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consecter adipiscing elite. Donec minos varius, viverra
            justo ut, aliquet nisl.
          </p>
          <div className="mt-4 flex gap-3">
            {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((name) => (
              <a
                key={name}
                href="https://www.componentdock.com/"
                aria-label={name}
                className="text-gray-500 transition-colors hover:text-brand"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Useful links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Useful Link
          </h3>
          {usefulLinks.map((col, i) => (
            <ul key={i} className="mb-3 space-y-2 text-sm">
              {col.map((link) => (
                <li key={link}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Recent posts */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Recent Post
          </h3>
          <ul className="space-y-4 text-sm">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <p className="leading-snug text-gray-300">{post.title}</p>
                <span className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>40 Baria Street 133/2, New York City, US</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+888111555666" className="transition-colors hover:text-brand">
                (+88) 111 555 666
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:info@lectern.edu" className="transition-colors hover:text-brand">
                info@lectern.edu
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>Monday - Friday, 08:00AM - 06:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright with Component Dock link */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Lectern. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand transition-colors hover:text-orange-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
