import { CandlestickChart } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const columns = [
  {
    title: 'Markets',
    links: ['Cryptocurrency', 'Stock Trading', 'Forex', 'Options Trading', 'Prediction Markets'],
  },
  {
    title: 'Popular Courses',
    links: [
      'Crypto Trading',
      'Day Trading Stocks',
      'Options Strategy',
      'Algo Trading',
      'Prediction Markets',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Mentors', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Disclaimer'],
  },
] as const

const socials = [
  { label: 'Ticker on Twitter', icon: TwitterIcon },
  { label: 'Ticker on LinkedIn', icon: LinkedinIcon },
  { label: 'Ticker on GitHub', icon: GithubIcon },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-xl font-bold text-gray-900 dark:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <CandlestickChart className="h-4 w-4" aria-hidden="true" />
              </span>
              Ticker
            </a>
            <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
              Trading education from millionaire mentors. Learn stocks, crypto, forex, and options
              with verified track records and live trading rooms.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-600 dark:hover:text-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2026 Ticker. All rights reserved.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-gray-500 dark:text-gray-500">
            Disclaimer: Trading involves significant risk of loss and is not suitable for all
            investors. Past performance is not indicative of future results. Ticker provides
            education only and does not offer financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
