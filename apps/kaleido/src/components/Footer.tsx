export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">Kaleido</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            An elegant UI kit for modern web projects.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand hover:underline"
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
