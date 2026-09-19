import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const instagramImages = Array.from({ length: 8 }, (_, i) => ({
  seed: `sarto-insta-${i + 1}`,
  alt: `Instagram post ${i + 1}`,
}))

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">About Us</h6>
            <p className="text-sm leading-relaxed text-gray-400">
              Sarto brings you curated fashion collections. Quality clothing for the modern
              wardrobe, blending comfort with style.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Newsletter</h6>
            <p className="mb-3 text-sm text-gray-400">Stay updated with our latest trends</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="flex-1 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:bg-white/20"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                &rarr;
              </button>
            </form>
          </div>

          {/* Instagram Feed */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Instagram Feed</h6>
            <div className="grid grid-cols-4 gap-1">
              {instagramImages.map((img) => (
                <img
                  key={img.seed}
                  src={`https://picsum.photos/seed/${img.seed}/80/80`}
                  alt={img.alt}
                  className="h-14 w-14 object-cover opacity-70 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider">Follow Us</h6>
            <p className="mb-3 text-sm text-gray-400">Let us be social</p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sarto. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 transition-colors hover:text-brand-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
