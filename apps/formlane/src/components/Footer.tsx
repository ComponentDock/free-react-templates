export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gradient-end hover:underline"
          >
            Component Dock
          </a>
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            componentdock.com
          </a>
        </p>
      </div>
    </footer>
  )
}
