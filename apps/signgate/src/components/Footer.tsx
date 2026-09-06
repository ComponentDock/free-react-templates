export function Footer() {
  return (
    <footer
      className="border-t border-gray-200 bg-white py-6"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="font-bold" style={{ color: '#000' }}>
          Signgate
        </p>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium transition-colors hover:text-primary-500"
          style={{ color: '#007bff' }}
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
