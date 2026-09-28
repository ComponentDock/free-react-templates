export function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="mx-auto flex max-w-[790px] flex-col items-center gap-3 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-bold text-white">Filtera</p>
          <p className="text-sm text-gray-400">Fancy search form with advanced filters.</p>
        </div>
        <p className="text-sm text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-primary-300"
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
