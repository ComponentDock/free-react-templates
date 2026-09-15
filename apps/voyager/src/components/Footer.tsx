function SvgTwitter({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function SvgFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SvgLinkedin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SvgDribbble({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.82 0-1.62.107-2.4.303v.13zM19.68 5.29c-.226.3-1.91 2.47-5.724 4.026.224.46.435.928.63 1.396.068.158.135.317.2.475 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.25-6.22z" />
    </svg>
  )
}

const socials = [
  { name: 'Twitter', Icon: SvgTwitter, href: '#' },
  { name: 'Facebook', Icon: SvgFacebook, href: '#' },
  { name: 'LinkedIn', Icon: SvgLinkedin, href: '#' },
  { name: 'Dribbble', Icon: SvgDribbble, href: '#' },
]

const bookNowLinks = ['Flight', 'Hotels', 'Tour', 'Car Rent', 'Beach & Resorts', 'Cruises']
const topDealsLinks = [
  'Edina Hotel',
  'Quality Suites',
  'The Hotel Zephyr',
  'Da Vinci Villa',
  'Hotel Epikk',
]
const blogLinks = [
  'The Ultimate Packing List For Female Travelers',
  'How These 5 People Found The Path to Their Dream Trip',
  'A Definitive Guide to the Best Dining and Drinking Venues in the City',
]

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Voyager</h4>
            <p className="mb-4 text-sm leading-relaxed">
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque
              dicta adipisci architecto culpa amet.
            </p>
            <div className="flex gap-3">
              {socials.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-500 hover:text-black"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Book Now */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Book Now</h4>
            <ul className="space-y-2">
              {bookNowLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors hover:text-primary-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Deals */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Top Deals</h4>
            <ul className="space-y-2">
              {topDealsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors hover:text-primary-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Post */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Blog Post</h4>
            <ul className="space-y-2">
              {blogLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors hover:text-primary-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Contact Information</h4>
            <ul className="space-y-2 text-sm">
              <li>291 South 21th Street, Suite 721 New York NY 10016</li>
              <li>
                <a href="tel://1234567920" className="hover:text-primary-500">
                  + 1235 2355 98
                </a>
              </li>
              <li>
                <a href="mailto:info@yoursite.com" className="hover:text-primary-500">
                  info@yoursite.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  yoursite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary-500 transition-colors hover:text-primary-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
