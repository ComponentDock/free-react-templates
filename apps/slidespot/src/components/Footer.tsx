export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6">
        <div>
          <p className="font-bold text-ink dark:text-white">SlideSpot</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Split-screen carousel for fashion collections.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
