export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-ink dark:text-white">Lenslide</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Testimonial carousel templates built with care.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand transition-colors hover:text-brand/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
