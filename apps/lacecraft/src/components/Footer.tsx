import { Zap } from 'lucide-react'

const shopLinks = ['Running', 'Sneakers', 'Basketball', 'Sandals', 'New Arrivals', 'Sale']
const helpLinks = ['Size Guide', 'Shipping Info', 'Returns', 'Order Status', 'FAQ', 'Contact Us']
const aboutLinks = ['Our Story', 'Careers', 'Press', 'Sustainability', 'Affiliates', 'Blog']

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415a3.72 3.72 0 0 1 1.345.876c.406.406.69.867.876 1.345.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227a3.72 3.72 0 0 1-.876 1.345 3.72 3.72 0 0 1-1.345.876c-.422.164-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.72 3.72 0 0 1-1.345-.876A3.72 3.72 0 0 1 2.79 19.2c-.164-.422-.36-1.057-.413-2.227C2.32 15.707 2.308 15.327 2.308 12.123s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227A3.72 3.72 0 0 1 3.654 3.7c.406-.406.867-.69 1.345-.876C5.421 2.66 6.056 2.464 7.226 2.41 8.492 2.352 8.872 2.34 12 2.34l.003.003ZM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a5.87 5.87 0 0 0-2.126 1.384A5.87 5.87 0 0 0 .63 4.14C.333 4.903.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.87 5.87 0 0 0 1.384 2.126 5.87 5.87 0 0 0 2.126 1.384c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.87 5.87 0 0 0 2.126-1.384 5.87 5.87 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.87 5.87 0 0 0-1.384-2.126A5.87 5.87 0 0 0 19.86.63c-.763-.297-1.635-.5-2.913-.558C15.667.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
    </svg>
  )
}

const socials = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'YouTube', Icon: YouTubeIcon },
  { name: 'TikTok', Icon: TikTokIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-gray-900 dark:text-white"
            >
              <Zap className="h-5 w-5 text-primary-500" aria-hidden="true" />
              Lacecraft
            </a>
            <p className="mt-3 max-w-xs text-sm text-gray-500 dark:text-gray-400">
              Premium footwear that combines cutting-edge design with unmatched comfort. Step into
              your style.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={`#${s.name.toLowerCase()}`}
                  aria-label={s.name}
                  className="text-gray-400 hover:text-primary-500"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">Shop</h3>
            <ul className="mt-3 space-y-2">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#shop-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">Help</h3>
            <ul className="mt-3 space-y-2">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#help-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">About</h3>
            <ul className="mt-3 space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#about-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Lacecraft. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#privacy" className="text-xs text-gray-400 hover:text-primary-500">
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs text-gray-400 hover:text-primary-500">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">We accept:</span>
            <span className="text-xs font-semibold text-gray-500">Visa</span>
            <span className="text-xs font-semibold text-gray-500">Mastercard</span>
            <span className="text-xs font-semibold text-gray-500">Amex</span>
            <span className="text-xs font-semibold text-gray-500">Apple Pay</span>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-3 text-center sm:px-6">
            <p className="text-xs text-gray-400">
              Made with ❤ by{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:text-primary-500"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
