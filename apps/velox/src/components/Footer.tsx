import { FacebookIcon, TwitterIcon, DribbbleIcon, BehanceIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Dribbble', href: 'https://dribbble.com', Icon: DribbbleIcon },
  { label: 'Behance', href: 'https://behance.net', Icon: BehanceIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-[family-name:var(--font-heading)]">
              About Me
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Do you want to be even more successful? Learn to love learning and growth. The more
              effort you put into improving your skills.
            </p>
            <p className="mt-6 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Velox. More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-periwinkle-400"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-[family-name:var(--font-heading)]">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-400">Stay updated with our latest trends</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex overflow-hidden rounded">
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email address"
                className="flex-1 bg-white px-4 py-2 text-sm text-gray-900 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-periwinkle-400 px-5 py-2 text-white transition-colors hover:bg-periwinkle-500"
              >
                &rarr;
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-[family-name:var(--font-heading)]">
              Follow Me
            </h3>
            <p className="mb-4 text-sm text-gray-400">Let us be social</p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-periwinkle-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
