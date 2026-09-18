import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

const linkGroups = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Services', 'Testimonials', 'Contact Us'],
  },
  {
    title: 'Products',
    links: ['Browse Listings', 'Premium Plans', 'Business Tools', 'Mobile App'],
  },
  {
    title: 'Features',
    links: ['Search Places', 'Read Reviews', 'Save Favorites', 'Share Tips'],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <LinkedinIcon />
              </a>
            </div>
            <h4 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wider text-white">
              Subscribe Newsletter
            </h4>
            <p className="mb-3 text-sm text-gray-400">
              Get the latest updates and tips delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
