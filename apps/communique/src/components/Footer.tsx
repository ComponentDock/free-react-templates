export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Communique — Free Consultation Template
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-olive hover:text-olive/80 dark:text-olive dark:hover:text-olive/80"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
