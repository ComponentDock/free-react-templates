export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="text-sm font-semibold text-gray-800 dark:text-white">Checkmark</span>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Custom Checkbox Showcase Template
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
