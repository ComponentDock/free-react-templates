import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './BrandIcons'

const NAV_LEFT = ['Home', 'Practice Area', 'Case Studies', 'Careers']
const NAV_RIGHT = ['About Us', 'Privacy Policy', 'Contact Us', 'Membership']

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-3">
        {/* Column 1: About + Subscribe */}
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase">About Jurist</h3>
          <p className="mb-6 text-sm text-gray-400">
            We are a premier law firm dedicated to providing exceptional legal services. Our
            experienced team handles every case with professionalism and determination.
          </p>
          <h3 className="mb-4 text-lg font-bold uppercase">Subscribe</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand px-4 py-2 text-sm font-bold uppercase text-white hover:bg-amber-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2: Navigations + Follow Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase">Navigations</h3>
          <div className="mb-8 grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-400">
              {NAV_LEFT.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm text-gray-400">
              {NAV_RIGHT.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="mb-4 text-lg font-bold uppercase">Follow Us</h3>
          <div className="flex gap-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="text-gray-400 hover:text-brand"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Video placeholder */}
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase">Watch Live Streaming</h3>
          <div className="relative overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/jurist-video/400/225"
              alt="Video placeholder"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/80 text-white">
                ▶
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <span className="text-red-500">♥</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
