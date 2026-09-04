export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">Checkly</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Custom-styled circular checkbox components for React.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
