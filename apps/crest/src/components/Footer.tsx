const SERVICES_LINKS = [
  'Design & Strategy',
  'Product Design',
  'Digital Marketing',
  'Software Development',
  'Ecommerce',
]

const NAV_LINKS = [
  'Design & Strategy',
  'Product Design',
  'Digital Marketing',
  'Software Development',
  'Ecommerce',
]

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="white" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#454e6d] to-[#232f55] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="mb-4 inline-block text-2xl font-bold">
            Crest
          </a>
          <p className="mb-6 text-sm text-white/70">
            Get the breathing space now, and we&apos;ll extend your term at the other end.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/70 transition-colors hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/70 transition-colors hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white/70 transition-colors hover:text-white"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Services</h4>
          <ul className="space-y-2">
            {SERVICES_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Navigation</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Contact us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:consulto98@gmail.com"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                consulto98@gmail.com
              </a>
            </li>
            <li>
              <span className="text-sm text-white/70">76/A, Green road, NYC</span>
            </li>
            <li>
              <a
                href="tel:+1807833673904"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                (80) 783 367-3904
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        <a
          href="https://www.componentdock.com/"
          className="transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
