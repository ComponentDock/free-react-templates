export interface FooterProps {
  className?: string
}

const gallery = Array.from({ length: 8 }, (_, i) => i + 1)

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DribbbleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zm7.56-7.872c.282.39 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.868 3.702c-.22.308-1.91 2.49-5.724 4.027.24.49.47.985.68 1.485.075.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  )
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-navy text-white ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              converge<span className="text-primary-400">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              The premier marketing conference bringing together industry leaders, innovators, and
              creative minds for three days of inspiration and networking.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <DribbbleIcon />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400">
              Newsletter
            </h3>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button
                type="submit"
                className="rounded-r bg-cta px-4 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400">
              Instagram
            </h3>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {gallery.map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/seed/gallery${n}/100/100`}
                  alt=""
                  className="h-14 w-14 rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Converge. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-400 hover:text-primary-300"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
