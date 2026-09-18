import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const footerLinks = {
  'Top Products': ['Course Browser', 'Top Rated', 'New Courses', 'Free Courses', 'Certificates'],
  'Quick Links': ['Home', 'About Us', 'Courses', 'Blog', 'Contact'],
  Features: [
    'Search Courses',
    'Ratings & Reviews',
    'Compare Platforms',
    'Learning Paths',
    'Bookmarks',
  ],
  Resources: ['Help Center', 'Community', 'Teach on Courselex', 'Affiliate Program', 'API Docs'],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* 4 link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-teal-grad-start"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-gray-400">
              Get the latest course recommendations and updates.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-[5px] bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-teal-grad-start"
              />
              <button
                type="submit"
                className="rounded-[5px] bg-teal-grad-start px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-grad-end"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Courselex. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Built with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-grad-start underline transition-colors hover:text-teal-grad-end"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
