export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-brand-text">Arcane</p>
          <p className="text-sm text-gray-500">Split-screen booking wizard</p>
        </div>
        <p className="text-sm text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
