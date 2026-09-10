const TOP_PRODUCTS = ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano']

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
  },
  {
    label: 'Behance',
    href: 'https://behance.net',
    path: 'M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0V4.51h6.938v-.007zM6.545 10.16c.64 0 1.16-.16 1.57-.49.41-.33.62-.83.62-1.52 0-.42-.07-.76-.21-1.03-.14-.27-.35-.48-.62-.63-.27-.15-.58-.26-.94-.32-.36-.06-.71-.1-1.07-.1H3.22v4.1h3.325zm.18 5.51c.41 0 .8-.05 1.19-.15.38-.1.71-.27 1-.5.29-.24.52-.55.68-.94.17-.4.25-.89.25-1.47 0-.77-.17-1.35-.51-1.74-.34-.39-.82-.58-1.44-.58H3.22v5.38h3.505zM15.04 4.503h5.54v1.47h-5.54V4.503zM21.557 8.07c.09.34.14.68.14 1.04 0 .78-.16 1.43-.49 1.96-.33.53-.78.93-1.35 1.22-.57.29-1.2.44-1.89.44-.69 0-1.33-.15-1.9-.44-.57-.29-1.03-.69-1.36-1.22-.34-.53-.5-1.19-.5-1.96 0-.36.05-.7.14-1.04h5.31zm-3.29 4.71c.39 0 .74-.07 1.04-.21.3-.14.54-.35.71-.62.17-.27.25-.63.25-1.06 0-.84-.22-1.43-.66-1.79-.44-.36-.99-.54-1.66-.54H15v4.22h3.267z',
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-[1170px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">About Us</h3>
            <p className="text-[14px] font-light leading-7 text-text-muted">
              CoinWave is a free cryptocurrency landing page template recreated in React. We provide
              tools for Bitcoin exchange, portfolio tracking, and real-time analytics.
            </p>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">Top Products</h3>
            <ul className="space-y-3">
              {TOP_PRODUCTS.map((product) => (
                <li key={product}>
                  <a
                    href="#price"
                    className="text-[14px] text-text-muted transition-colors hover:text-white"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="mb-6 text-[18px] font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-[14px] text-text-muted">
              Subscribe to our newsletter for the latest updates and crypto insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-0">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-l-[57px] bg-social-bg px-6 py-3 text-[14px] text-white outline-none placeholder:text-text-muted"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-r-[57px] bg-orange-brand px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-orange-brand/80"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center bg-social-bg text-text-muted transition-colors hover:bg-orange-brand hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-[14px] text-text-muted">
            © 2026 CoinWave. All rights reserved. · Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline-offset-4 transition-colors hover:text-orange-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
