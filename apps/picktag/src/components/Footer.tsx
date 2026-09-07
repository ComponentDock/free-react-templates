export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand transition-colors hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
