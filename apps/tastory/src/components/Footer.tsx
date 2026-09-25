const RESTAURANT_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Chefs', href: '#menu' },
  { label: 'Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const USEFUL_LINKS = [
  { label: 'Foods', href: '#menu' },
  { label: 'Drinks', href: '#menu' },
  { label: 'Breakfast', href: '#menu' },
  { label: 'Brunch', href: '#menu' },
  { label: 'Dinner', href: '#menu' },
]

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-night py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top row */}
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          {/* About */}
          <div className="md:col-span-5">
            <h3 className="mb-4 font-heading text-xl font-bold text-white">About Us</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus
              blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem
              sequi facere eos tenetur, ex?
            </p>
          </div>

          {/* Restaurant links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="mb-4 font-heading text-xl font-bold text-white">The Restaurant</h3>
            <ul className="space-y-2">
              {RESTAURANT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-amber-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-heading text-xl font-bold text-white">Useful Links</h3>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-amber-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="mb-4 flex justify-center gap-6">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-amber-brand"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-amber-brand"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-amber-brand"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <span className="text-amber-brand">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-amber-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
