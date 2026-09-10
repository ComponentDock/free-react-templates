const solutionsLinks = ['Register', 'Login', 'Buy', 'Sell', 'Submit a Bid'] as const
const servicesLinks = ['Register', 'Login', 'Buy', 'Sell', 'Submit a Bid'] as const
const contactLinks = [
  'Help Center',
  'Support Community',
  'Press',
  'Share Your Story',
  'Our Supporters',
] as const

export function Footer() {
  return (
    <footer id="footer" className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Bidcraft
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            The best online auction marketplace. Buy, sell, and bid on unique items from sellers
            around the world.
          </p>
          <a href="#home" className="mt-4 inline-block text-sm text-primary-400 hover:underline">
            Learn More
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Solutions
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {solutionsLinks.map((link) => (
              <li key={link}>
                <a href="#how" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {servicesLinks.map((link) => (
              <li key={link}>
                <a href="#how" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {contactLinks.map((link) => (
              <li key={link}>
                <a href="#footer" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Bidcraft. All rights reserved. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
