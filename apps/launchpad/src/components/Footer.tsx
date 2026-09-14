import { Send } from 'lucide-react'

const topProducts = ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service']

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-2.2-1.95-5.07-3.153-8.195-3.153-.31 0-.62.015-.93.042zm10.335 3.483c-.218.29-1.89 2.478-5.647 4.024.242.49.477.985.68 1.486.08.18.154.36.227.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.39-6.37z" />
    </svg>
  )
}

const socialLinks = [
  { icon: <FacebookIcon />, label: 'Facebook' },
  { icon: <TwitterIcon />, label: 'Twitter' },
  { icon: <DribbbleIcon />, label: 'Dribbble' },
  { icon: <Send className="h-4 w-4" />, label: 'Send' },
]

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Top Products */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Top Products
            </h4>
            <ul className="space-y-2">
              {topProducts.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              You can trust us. We only send promo offers, not a single spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Enter Email"
                aria-label="Email address"
                className="flex-1 rounded bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand-600"
              />
              <button
                type="submit"
                className="rounded bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Instagram Feed placeholder */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Latest Updates
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/seed/launchpad-ig${n}/100/100`}
                  alt={`Update ${n}`}
                  className="aspect-square w-full rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <span className="text-brand-600">&hearts;</span>{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white transition hover:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-gray-500 transition hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
