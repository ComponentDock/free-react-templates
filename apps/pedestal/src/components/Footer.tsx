const contactInfo = [
  { label: '+1 291 3912 329', type: 'phone' as const },
  { label: 'info@gmail.com', type: 'email' as const },
] as const

const tweets = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.',
] as const

const navLinks = ['Home', 'About', 'Our works', 'Services', 'Blog', 'Contacts'] as const

const galleryImages = [
  { seed: 'pedestal-gal-1', alt: 'Gallery image 1' },
  { seed: 'pedestal-gal-2', alt: 'Gallery image 2' },
  { seed: 'pedestal-gal-3', alt: 'Gallery image 3' },
  { seed: 'pedestal-gal-4', alt: 'Gallery image 4' },
] as const

function PhoneIcon() {
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
      className="text-accent-orange"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
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
      className="text-accent-orange"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-footer-text"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="bg-footer-bg font-['Poppins',sans-serif] text-footer-muted"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Us Column */}
          <div className="md:pr-8">
            <h3 className="mb-7 text-xl font-medium text-footer-text">About Us</h3>
            <p className="mb-6 font-['Source_Serif_Pro',serif]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde
              facere repellendus, odio et iste voluptatum aspernatur ratione mollitia tempora
              eligendi maxime est, blanditiis accusamus. Incidunt, aut, quis!
            </p>

            <ul className="mb-6 list-none space-y-3">
              {contactInfo.map((item) => (
                <li key={item.type}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-footer-text transition-colors hover:text-accent-orange"
                  >
                    {item.type === 'phone' ? <PhoneIcon /> : <EmailIcon />}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <form
              className="relative"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Enter your e-mail"
                aria-label="Email address"
                className="h-14 w-full rounded-full border-none bg-footer-input pl-8 pr-32 text-sm text-footer-text placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 rounded-full bg-accent-orange px-8 py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>

          {/* Latest Tweet Column */}
          <div>
            <h3 className="mb-7 text-xl font-medium text-footer-text">Latest Tweet</h3>
            <ul className="list-none space-y-5">
              {tweets.map((tweet, i) => (
                <li key={i} className="flex gap-4 font-['Source_Serif_Pro',serif] text-sm italic">
                  <span className="shrink-0 pt-0.5">
                    <TwitterIcon />
                  </span>
                  <span>{tweet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Column */}
          <div>
            <h3 className="mb-7 text-xl font-medium text-footer-text">Instagram</h3>
            <div className="grid grid-cols-2 gap-[5px]">
              {galleryImages.map((img) => (
                <a key={img.seed} href="#" className="block transition-opacity hover:opacity-50">
                  <img
                    src={`https://picsum.photos/seed/${img.seed}/200/200`}
                    alt={img.alt}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Menu Bar */}
        <div className="mt-28 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <ul className="flex flex-wrap list-none gap-2">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`inline-block py-2 text-sm text-footer-text transition-colors hover:text-accent-orange ${i === 0 ? 'pl-0' : 'px-2.5'}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-footer-text transition-colors hover:text-accent-orange"
            >
              Component Dock
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
