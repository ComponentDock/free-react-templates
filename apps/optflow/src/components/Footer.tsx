export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-4 text-center">
        <p className="text-lg font-bold text-gray-900">OptFlow</p>
        <p className="text-sm text-gray-500">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
