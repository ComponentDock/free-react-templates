import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Merry
            </span>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Discover and share beautiful carousel showcases with stunning visual presentations.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#home" className="transition-colors hover:text-brand">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-brand">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="transition-colors hover:text-brand">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-brand">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#showcase" className="transition-colors hover:text-brand">
                  Carousel Guide
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-brand">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-brand">
                  Support
                </a>
              </li>
              <li>
                <a href="#home" className="transition-colors hover:text-brand">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Connect
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Follow us for updates and new carousel designs.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Merry. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-medium hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
