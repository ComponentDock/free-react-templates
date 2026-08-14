import { SocialLinks } from './SocialLinks'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-extrabold tracking-tight text-white"
          >
            Gallery
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A minimal portfolio showcase for photographers, designers and makers — simple, clean and
            focused on the work.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Follow</h2>
          <p className="mt-4 text-sm leading-relaxed">
            New templates every week, free to use and ready to deploy.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Gallery. All rights reserved. · Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-primary-400 underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
