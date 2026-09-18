export function Footer() {
  return (
    <footer className="bg-black py-8" data-testid="footer">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white underline underline-offset-2 transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
