import { SocialLinks } from './SocialLinks'

export function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white py-2 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm sm:flex-row sm:px-6">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600 dark:text-gray-300">
          <span>
            <strong>Phone:</strong>{' '}
            <a href="tel:+129232934238" className="transition-colors hover:text-primary-600">
              +1 292 3293 4238
            </a>
          </span>
          <span>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:info@yourdomain.com"
              className="transition-colors hover:text-primary-600"
            >
              info@yourdomain.com
            </a>
          </span>
        </p>
        <SocialLinks />
      </div>
    </div>
  )
}
