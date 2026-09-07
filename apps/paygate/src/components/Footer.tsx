export function Footer() {
  return (
    <footer className="border-t bg-white py-6" style={{ borderColor: '#eee' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm font-bold" style={{ color: '#26282b' }}>
          PayGate
        </p>
        <p className="text-sm" style={{ color: '#666' }}>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-colors"
            style={{ color: '#1a73e8' }}
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
